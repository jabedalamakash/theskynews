import React from 'react'


// const socialData=async()=>{
// const fetcher= await fetch("http://localhost:3000/api/socials");
// const fetchData= await fetcher.json();
// return fetchData;
// }

export default async function AppFooter() {
    // const data=await socialData()
    // console.log(data)
  return (
    <div>
      <p className='bg-blue-600 text-center py-6 text-white'>Copyright @2024 The Sky News</p>
    </div>
  )
}
