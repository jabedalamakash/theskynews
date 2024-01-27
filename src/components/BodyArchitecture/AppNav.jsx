import Link from "next/link";
import Navbar from "@/components/BodyArchitecture/Navbar";

const syncData=async()=>{
  const fetcher= await fetch("https://theskynews.vercel.app/api/socials");
  const fetcher2= await fetch("https://theskynews.vercel.app/api/categories");
  const fetchData= await fetcher.json();
  const fetchData2= await fetcher2.json();
  return {fetchData:fetchData,fetchData2:fetchData2};
  }

  const currentDate= new Date();
  const options= {day:'numeric', month:'long', year:'numeric'}
  const formattedDate= currentDate.toLocaleDateString('bn-BD',options);
export default async function AppNav() {
  const result=await syncData()
  const {data}= result.fetchData
  const catData= result.fetchData2
  const navData=catData.data;
 
  // console.log(navData);
  return (
    <section className="w-full sticky z-50 top-0 shadow-md bg-white px-5 md:px-0">
    <div className=" md:w-[80%] mx-auto">
      <div className="flex justify-between w-full  my-5 ">
        <h1>{formattedDate}</h1>
        <div className='flex space-x-5'>
          <Link href={data[0].facebook}>Facebook</Link>
          <Link href={data[0].youtube}>Youtube</Link>
          <Link href={data[0].twitter}>Twitter</Link>
          <Link href={data[0].linkedin}>Linkdin</Link></div>
      </div>
      <hr/>
      <div className="text-center py-5">
      <Link className='font-bold text-5xl text-center ' href={"/"}>The Sky News</Link> 
      </div>
      <hr />   
      <div>
      <Navbar data={navData}/>
      </div>
      
    </div>
    </section>

    
  )
}
