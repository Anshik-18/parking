import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@repo/db/";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const lot = await prisma.parkinglot.findUnique({
    where: { 
      id: Number(id)
    },
  });

  if (!lot) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(lot);
}
