
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import NewsList from '@/components/NewsList';
import PopularNews from '@/components/PopularNews';
import Subscribe from '@/components/Subscribe';
import LatestNews from "@/components/LatestNews";

const syncData=async(name)=>{

  const fetcher= await fetch(`http://localhost:3000/api/news/search?keyword=${name}`);
  const fetcherPopular= await fetch("http://localhost:3000/api/news/type?type=popular");
  const fetcherLatest = await fetch("http://localhost:3000/api/latestnews/");
  const fetchData= await fetcher.json();
  const popularData= await fetcherPopular.json();
  const latestData = await fetcherLatest.json();
  return {fetchData, popularData,latestData};
  }
export default async function page({searchParams}) {
   console.log(searchParams.keyword);
 
  const keyword=searchParams.keyword;
    const {popularData,fetchData,latestData}=await syncData(keyword)
    console.log(fetchData);

  return (
    <UserLayout>
      <section className='w-full md:w-[80%] my-20 px-5 md:px-0 mx-auto'>
        <h1 className='text-3xl '>You searched for {keyword}</h1>
        <div className='flex mt-20 flex-col md:flex-row gap-20'>
        <div className='md:w-[70%]'>
          {
            fetchData.data.length===0?
            <h1 className='text-3xl font-bold w-full text-center'>No Data Found</h1>:
            <NewsList data={fetchData.data}/>
          }
        
        </div>
        <div className='md:w-[30%]'>
        <LatestNews data={latestData.data}/>
          <PopularNews data={popularData.data}/>
         <Subscribe/>
        </div>
        </div>
        </section>
        
    </UserLayout>
  )
}

