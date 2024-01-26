import Link from 'next/link';
import React from 'react'


const socialData=async()=>{
const fetcher= await fetch("https://theskynews.vercel.app/api/socials");
const fetcher2= await fetch("https://theskynews.vercel.app/api/categories");
const fetchData= await fetcher.json();
const fetchData2= await fetcher2.json();

return {fetchData:fetchData,fetchData2:fetchData2};
}

export default async function AppFooter() {
    const result=await socialData()
    const {data}= result.fetchData
    const catData= result.fetchData2
    // const {facebook,youtube,twitter,linkedin}= result.data;
    console.log(catData);
  return (
    <section>
      <div className='flex justify-center items-center gap-40 pb-10'>
        <div>
          <h1 className='font-bold text-5xl'>The Sky News</h1>
        </div>
       
        <div className=' '>
          <div>
            <p>Follow Us</p></div>
          <div className='flex space-x-5'>
          <Link href={data[0].facebook}>Facebook</Link>
          <Link href={data[0].youtube}>Youtube</Link>
          <Link href={data[0].twitter}>Twitter</Link>
          <Link href={data[0].linkedin}>Linkdin</Link></div>

        </div>      
      </div>
      <div>
      <p className='bg-blue-600 text-center py-6 text-white'>Copyright @2024 The Sky News</p>
      </div>
      
    </section>
  )
}
