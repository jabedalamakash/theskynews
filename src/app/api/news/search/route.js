import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let keyword= searchParams.get('keyword');

        const prisma=new PrismaClient();
        // const result=await prisma.news_list.findMany({
        //     where:{title:{contains:keyword,
        //     mode:'insensitive'}},
        //     include:{
        //         categories:true}
          
        //     //  select:{id:true,title:true,short_des:true,img:true,createdAt:true}

        // })

        const result=await prisma.categories.findMany({
            include:{
                news_list:{
                    where:{title:{contains:keyword,
                        mode:'insensitive'}},
                       
                }},
                where:{
                    news_list:{
                        some:{title:{contains:keyword,
                        mode:'insensitive'}},
                    }
                }

        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}