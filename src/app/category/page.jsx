
import UserLayout from '@/components/BodyArchitecture/UserLayout'
// import { useSearchParams } from 'next/navigation'
const syncData=async(title)=>{
 
  const fetcher= await fetch("https://theskynews.vercel.app/api/categories?");
  const fetchData= await fetcher.json();
  return fetchData;
  }
export default async function page(params) {
  console.log(params);
    // const params= useSearchParams()
    const result=await syncData()
  return (
    <UserLayout>
        <h1>Hello {params}</h1>
    </UserLayout>
  )
}
