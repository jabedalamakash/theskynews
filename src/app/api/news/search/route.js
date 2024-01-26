import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let keyword= searchParams.get('keyword');

        const prisma=new PrismaClient();
        const result=await prisma.news_list.findMany({
            where:{title:{contains:keyword}},
            //  select:{id:true,title:true,short_des:true,img:true,createdAt:true}

        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}