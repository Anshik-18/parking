import { prisma } from "@repo/db/"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export async function POST(req: Request) {
    await getServerSession(authOptions); // Just verify session exists
    const { parking_slot_id } = await req.json();
    
    const parking_slot = await prisma.parkinglot.findFirst({
        where: {
            id: parking_slot_id
        }
    });

    if (!parking_slot?.isempty) {
        return NextResponse.json({ success: false, message: "The parking slot is already fulled" });
    }

    const booking = await prisma.parkings.update({
        where: {
            id: parking_slot_id
        },
        data: {
            status: "Cancelled"
        }
    });

    return NextResponse.json({ success: true, message: booking });
}