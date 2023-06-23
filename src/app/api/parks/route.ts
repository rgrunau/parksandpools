import prisma from "../../../../lib/primsa";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function GET(req: Request) {

    const user = await currentUser();
    try {   
        const parks = await prisma.visitedPark.findMany({
            where: {
                userId: user?.id
            },
        });
        return new NextResponse(JSON.stringify(parks), { 
            status: 200, 
            headers: { "Content-Type": "application/json" },
           });
    } catch (error: any) {
        console.log(error);
        return new NextResponse(error.message, { status: 500 });
    }
};

export async function POST(req: Request) {
    
    try {
        const body = await req.json();
        if(body === null){
            throw new Error("No body found");
        }
        const park = await prisma.visitedPark.create({
            data: body as any
        });
        return new NextResponse(JSON.stringify(park), { 
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
        console.log(error);
        return new NextResponse(error.message, { status: 500 });
    }
};
