import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@repo/db/"

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  const id = context.params.id;
  console.log(id)

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
