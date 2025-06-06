import NextAuth from "next-auth"
import { authOptions } from "../../../lib/auth"

export const runtime = "nodejs";
const handler = NextAuth(authOptions)

// Export the handler for both GET and POST methods
export const GET = handler
export const POST = handler