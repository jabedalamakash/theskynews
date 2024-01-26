import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(req,res) {
    try{
        const prisma=new PrismaClient();
        let reqBody=await req.json();
        const {type}=reqBody
        let {searchParams}=new URL(req.url);
        let id= Number(searchParams.get('id'));
        const result=await prisma.policies.update(
            {where:{id:id},data:{type}})
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}