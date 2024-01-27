import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let remarks= searchParams.get('type');

        const prisma=new PrismaClient();
        const result=await prisma.news_list.findMany(
        {orderBy: {id: "desc"},take:5}
        

    )
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}