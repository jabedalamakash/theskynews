import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        let {searchParams}=new URL(req.url);
        let name= searchParams.get('category');
        const result=await prisma.categories.findMany({where:{name:name}})
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
