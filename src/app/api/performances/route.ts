import prisma from "@/utils/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const performances = await prisma.performance.findMany();

    return NextResponse.json(performances);
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
