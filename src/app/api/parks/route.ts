import prisma from "../../../../lib/primsa";
import { NextApiRequest, NextApiResponse } from "next";

export async function Post(req: NextApiRequest) {

    try {
        const body = await req.body;
        const park = await prisma.park.create({
            data: body
        });
        debugger;
    } catch (error: any) {
        
    }
}
