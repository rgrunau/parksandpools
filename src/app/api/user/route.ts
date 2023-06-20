import prisma from "../../../../lib/primsa";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  
    try {
        const body = await request.json();
        const user = await prisma.user.create({
            data: body
        });
        return new NextResponse(JSON.stringify(user), { 
            status: 201, 
            headers: { "Content-Type": "application/json" },
           });
    } catch (error: any) {
        if (error.code === "P2002") {
            return new NextResponse(JSON.stringify({ error: "User already exists" }), { 
                status: 400, 
                headers: { "Content-Type": "application/json" },
            });
        }
        return new NextResponse(error.message, { status: 500 });
    }

}
