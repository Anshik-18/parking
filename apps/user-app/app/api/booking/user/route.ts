import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@repo/db/";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);
    const userid = session?.user?.id ;

    if (!userid) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const bookings = await prisma.parkings.findMany({
        where: {
            userid: Number(userid)
        }
    });

    if (bookings.length === 0) {
        return NextResponse.json({ success: false, message: "No bookings found", bookings: [] });
    }

    return NextResponse.json({ success: true, bookings });
}
