import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@repo/db/";

export async function GET(
  _request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    // Make sure to convert the id to number
    const lot = await prisma.parkinglot.findUnique({
      where: {
        id: Number(id), // Convert to number here
      },
    });

    if (!lot) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(lot);
  } catch (_error) {
    // Using _error to indicate it's intentionally unused
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
  