import Link from "next/link";
import Navbar from "@/components/BodyArchitecture/Navbar";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

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
      <div className="flex justify-between mx-auto  my-5 ">
        <h1>{formattedDate}</h1>
        <div className='flex space-x-5'>
          <Link href={data[0].facebook}><FaFacebook size={30}/></Link>
          <Link href={data[0].youtube}><FaYoutube size={30}/></Link>
          <Link href={data[0].twitter}><FaTwitter size={30}/></Link>
          <Link href={data[0].linkedin}><FaLinkedin size={30}/></Link></div>
      </div>
      <div className="text-center mb-5 py-5">
      <Link className='font-bold text-5xl text-center ' href={"/"}>The Sky News</Link> 
      </div> 
      <div>
      <Navbar data={navData}/>
      </div>
      
    </div>
    </section>

    
  )
}
