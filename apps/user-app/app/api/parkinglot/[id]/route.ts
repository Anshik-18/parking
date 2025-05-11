import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@repo/db/";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(
  _request: NextRequest,
  props: Props
) {
  try {
    const { id } = props.params;

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
  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
  