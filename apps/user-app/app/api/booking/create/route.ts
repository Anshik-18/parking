import { prisma } from "@repo/db/"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export async function POST(req: Request) {
    const { parking_lot_id, carnumber } = await req.json();
    const session = await getServerSession(authOptions);
    const userid = session?.user?.id;

    if (!userid) {
        return NextResponse.json({ success: false, message: "User not authenticated" }, { status: 401 });
    }

    const parking_slot = await prisma.parkinglot.findFirst({
        where: {
            id: Number(parking_lot_id)
        }
    });

    if (!parking_slot) {
        return NextResponse.json({ success: false, message: "Cannot find the parking lot" });
    }

    if (parking_slot.vacantslots <= 0 && parking_slot.isempty) {
        await prisma.parkinglot.update({
            where: {
                id: Number(parking_lot_id)
            },
            data: {
                isempty: false
            }
        });
        return NextResponse.json({ success: false, message: "The parking lot is already full" });
    }

    const booking = await prisma.parkings.create({
        data: {
            userid: Number(userid),
            parkingslotid: Number(parking_lot_id),
            status: "Pre_booked",
            carnumber: carnumber
        }
    });

    const isLastSlot = parking_slot.vacantslots === 1;
    
    await prisma.parkinglot.update({
        where: {
            id: Number(parking_lot_id)
        },
        data: {
            vacantslots: {
                decrement: 1
            },
            occupiedslots: {
                increment: 1
            },
            isempty: !isLastSlot
        }
    });

    return NextResponse.json({ success: true, booking });
}