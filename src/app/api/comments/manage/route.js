import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function POST(req,res) {
    try{
        let headerList=headers();
        // let id=parseInt(headerList.get('id'));

        let reqBody=await req.json();
        // reqBody.userID=id;

        const prisma=new PrismaClient();
        const result=await prisma.comments.create({
            data:reqBody
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()});
    }
}
