import prisma from "@/utils/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1; // 기본값 1페이지
    const limit = Number(url.searchParams.get("limit")) || 6; // 페이지당 10개 기본값

    // 페이지에 맞는 데이터를 가져옴 (skip = 건너뛸 레코드 수, take = 가져올 레코드 수)
    const performances = await prisma.performance.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    // 전체 데이터 개수를 확인해서 마지막 페이지 여부 판단
    const totalPerformances = await prisma.performance.count();
    const totalPages = Math.ceil(totalPerformances / limit);
    return NextResponse.json({
      data: performances,
      meta: {
        currentPage: page,
        totalPages: totalPages,
        hasNextPage: page < totalPages,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch performances" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
