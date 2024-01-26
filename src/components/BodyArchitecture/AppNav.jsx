import Link from "next/link";
import Navbar from "@/components/BodyArchitecture/Navbar";

const socialData=async()=>{
  const fetcher= await fetch("https://theskynews.vercel.app/api/socials");
  const fetchData= await fetcher.json();
  return fetchData;
  }

  const currentDate= new Date();
  const options= {day:'numeric', month:'long', year:'numeric'}
  const formattedDate= currentDate.toLocaleDateString('bn-BD',options);
export default async function AppNav() {
  const result=await socialData()
  const data= result.data;
  return (
    <section className="w-full px-5 md:px-0">
    <div className="w-full  md:px-0">
      <div className="flex justify-between w-full md:w-[80%]  my-5 mx-auto">
        <h1>{formattedDate}</h1>
        <div className='flex space-x-5'>
          <Link href={data[0].facebook}>Facebook</Link>
          <Link href={data[0].youtube}>Youtube</Link>
          <Link href={data[0].twitter}>Twitter</Link>
          <Link href={data[0].linkedin}>Linkdin</Link></div>
      </div>
      <hr className="w-[80%] mx-auto"/>
      <div className="text-center py-5">
      <Link className='font-bold text-5xl text-center ' href={"/"}>The Sky News</Link> 
      </div>
      <hr className="w-[80%] mx-auto"/>   
      <div>
      <Navbar/>
      </div>
      
    </div>
    </section>

    
  )
}
