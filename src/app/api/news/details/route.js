import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let slug= searchParams.get('title');

        const prisma=new PrismaClient();
        const result=await prisma.news_list.findMany({
            where:{slug:slug},
            include:{categories:true}
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}