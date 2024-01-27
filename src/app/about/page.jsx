
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import parse from 'html-react-parser';
const syncData=async()=>{
 
  const fetcher= await fetch("http://localhost:3000/api/policies?type=about");
  const fetchData= await fetcher.json();
  return fetchData;
  }
export default async function page() {
  
    
    const {data}=await syncData()
    console.log(data[0].long_des);
  return (
    <UserLayout>
      <div className='w-full md:w-[80%] px-5 md:px-0 md:py-10 mx-auto'>
     
        {parse(data[0].long_des)}
        
      
      </div>
       
    </UserLayout>
  )
}