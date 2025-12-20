import { type NextRequest } from "next/server"
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    
    const heardsList = await headers();
    console.log(heardsList.get("Authorization"));
    return new Response(JSON.stringify("Response"), {
        headers: {"Content-Type": "application/json"},
        status: 200,
    });
}