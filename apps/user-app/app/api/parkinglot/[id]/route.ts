import { NextResponse } from "next/server";
import { prisma } from "@repo/db/";

// @ts-ignore
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const lot = await prisma.parkinglot.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!lot) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(lot);
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
  