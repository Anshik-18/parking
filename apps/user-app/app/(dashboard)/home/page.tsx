import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { prisma } from "@repo/db/"
import { UserParkingCard } from "../../../Components/User_parking_status"
import { SearchboxMapClient } from "../../../Components/SearchMap"

async function getbooking(userid: string) {
    const booking = await prisma.parkings.findFirst({
        where: {
            userid: Number(userid),
            status: { in: ["Pre_booked", "Parked"] }
        },
        include: {
            parkingslot: true
        }
    })
    return booking
}

export default async function Home() {
    const session = await getServerSession(authOptions)
    const userid = session?.user?.id

    if (!userid) {
        return (            
            <div>
                <SearchboxMapClient />
                user not logged in
            </div>
        )
    }
   

        const booking = await getbooking(userid)
        if (!booking) {
            return (
                <div>
                    <SearchboxMapClient />
                    &quot;No bookings Found&quot;
                </div>
            )
        }
  


    return (
        <div>
            <SearchboxMapClient />
            <div className="m-20">
                <UserParkingCard 
                    status={booking.status}
                    Adress={booking.parkingslot.Adress}
                    carNumber={booking.carnumber}
                    location="{booking.starttime}"
                />
            </div>
            <div>
            </div>
        </div>
    )
}