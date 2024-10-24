import prisma from "@/utils/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const url = new URL(req.url);

    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 6;
    const category = url.searchParams.get("category");

    // 카테고리에 따라 필터링된 데이터 요청
    const events = await prisma.events.findMany({
      where: {
        ...(category && category !== "all" && { type: category }),
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalEvents = await prisma.events.count({
      where: {
        ...(category && category !== "all" && { type: category }), // 총 개수도 필터링
      },
    });
    const totalPages = Math.ceil(totalEvents / limit);

    return NextResponse.json({
      data: events,
      meta: {
        currentPage: page,
        totalPages: totalPages,
        hasNextPage: page < totalPages,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
