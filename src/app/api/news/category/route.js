import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let name=searchParams.get('category');

        const prisma=new PrismaClient();
        const result=await prisma.categories.findMany({
                where:{name:name},
                include:{
                    news_list:true}
                
        }
        )
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}