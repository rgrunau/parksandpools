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


export async function PATCH(req: Request,{params}: {params: {id: string}}) {
    const id = params.id;
    let json = await req.json();
    const updatedPark = await prisma.visitedPark.update({
        where: {
            id
        },
        data: json
    });

    if(!updatedPark){
        return new NextResponse(JSON.stringify({error: "Park not found"}), {status: 404});
    }

    return NextResponse.json(updatedPark);
}