// pages/api/performances/[id].ts
import prisma from "@/utils/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const performance = await prisma.performance.findUnique({
      where: { id: Number(id) },
    });

    if (!performance) {
      return NextResponse.json(
        { error: "Performance not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(performance);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch performance" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
