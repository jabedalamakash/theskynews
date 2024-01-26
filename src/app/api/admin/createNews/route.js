import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const { slug,author,title,short_des,img,long_des,remarks,catID}=reqBody;

        const prisma=new PrismaClient();
        const result=await prisma.news_list.create({
            data:{
                slug,
                author,
                title,
                short_des,
                img,
                long_des,
                remarks,
                categories:{
                    connect:{id:catID},
                }
            }})

        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
