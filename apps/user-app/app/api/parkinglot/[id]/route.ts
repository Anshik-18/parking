import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@repo/db/";

type RouteParams = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: RouteParams }
): Promise<NextResponse> {
  try {
    const { id } = params;

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
  