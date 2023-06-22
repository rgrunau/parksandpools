import prisma from "../../../../../lib/primsa";
import { NextResponse } from "next/server";


export async function GET(req: Request,{params}: {params: {id: string}}) {
    const id = params.id;
    const park = await prisma.visitedPark.findUnique({
        where: {
            id
        }
    });

    if(!park){
        return new NextResponse(JSON.stringify({error: "Park not found"}), {status: 404});
    }

    return NextResponse.json(park);
};