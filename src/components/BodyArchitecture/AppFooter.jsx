import Link from 'next/link';
import React from 'react'


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
      <div className=' '>
        <div className='text-center bg-stone-100 my-5'>
          <h1 className='font-bold text-blue-600 py-5 text-5xl'>The Sky News</h1>
        </div>
       
        <div className='mb-4'>
          <div>
            <p className='text-center mb-2'>Follow Us</p>
          </div>
          <div className='flex justify-center space-x-5'>
          <Link href={data[0].facebook}>Facebook</Link>
          <Link href={data[0].youtube}>Youtube</Link>
          <Link href={data[0].twitter}>Twitter</Link>
          <Link href={data[0].linkedin}>Linkdin</Link>
          </div>

        </div> 
   
      </div>
      <div className='flex justify-center items-center space-x-6 mb-5'>
        <Link href={"/privacy"}>Privacy Policy</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"contact"}>Contact Us</Link>
        </div>  
      <div>
      <p className='bg-blue-600 text-center py-6 text-white'>Copyright @2024 The Sky News</p>
      </div>
      
    </section>
  )
}
