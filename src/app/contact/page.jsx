
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import parse from 'html-react-parser';
const syncData=async()=>{
 
  const fetcher= await fetch("https://theskynews.vercel.app/api/policies?type=contact");
  const fetchData= await fetcher.json();
  return fetchData;
  }
export default async function page() {
  
    
    const {data}=await syncData()
    // console.log(data[0].long_des);
  return (
    <UserLayout>
      <div className='w-full md:w-[80%] px-5 md:px-0 md:py-10 mx-auto'>
        <h1 className='text-center font-bold text-3xl mb-5 md:mb-10'>Contact Us</h1>
        <div className=' text-center '>
        {parse(data[0].long_des)}
        </div>
      
      </div>
    </UserLayout>
  )
}
