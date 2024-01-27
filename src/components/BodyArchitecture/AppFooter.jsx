import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const socialData=async()=>{
const fetcher= await fetch("https://theskynews.vercel.app/api/socials");
const fetchData= await fetcher.json();


return fetchData;
}

export default async function AppFooter() {
    const {data}=await socialData()
    // const {data}= result.fetchData
    
  
  return (
    <section>
      <div className=' flex flex-col md:flex-row border-t-2 items-center justify-between mx-auto px-5 md:px-0 md:w-[80%]'>

        <div className='text-center py-2 md:my-5'>
          <h1 className='font-bold text-blue-600 py-5 text-5xl'>The Sky News</h1>
        </div>

        <div className='flex justify-center items-center space-x-6 mb-5'>
        <Link className='border-2 border-blue-600 p-3' href={"/privacy"}>Privacy Policy</Link>
          <Link className='border-2 border-blue-600 p-3' href={"/about"}>About Us</Link>
          <Link className='border-2 border-blue-600 p-3' href={"contact"}>Contact Us</Link>
        </div> 
       
       <footer>
       <div className='mb-4'>
          <div>
            <p className='text-center mb-2'>Follow Us</p>
          </div>
          <div className='flex justify-center space-x-5'>
          <Link href={data[0].facebook}><FaFacebook size={30}/></Link>
          <Link href={data[0].youtube}><FaYoutube size={30} /></Link>
          <Link href={data[0].twitter}><FaTwitter size={30} /></Link>
          <Link href={data[0].linkedin}><FaLinkedin size={30}/></Link>
          </div>


        </div> 

       </footer>
 
   
      </div>

      <div>
      <p className='bg-blue-600 text-center py-6 text-white'>Copyright @2024 The Sky News</p>
      </div>
      
    </section>
  )
}
