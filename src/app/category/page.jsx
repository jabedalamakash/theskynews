
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import NewsList from '@/components/NewsList';
import PopularNews from '@/components/PopularNews';
import Subscribe from '@/components/Subscribe';
import LatestNews from "@/components/LatestNews";

const syncData=async(name)=>{

  const fetcher= await fetch(`${process.env.FETCH_URL}/api/category?category=${name}`);
  const fetcherPopular= await fetch(`${process.env.FETCH_URL}/api/news/type?type=popular`);
  const fetcherLatest = await fetch(`${process.env.FETCH_URL}/api/latestnews/`);
  const fetchData= await fetcher.json();
  const popularData= await fetcherPopular.json();
  const latestData = await fetcherLatest.json();
  return {fetchData, popularData,latestData};
  // ${process.env.FETCH_URL}
  }
export default async function page({searchParams}) {
  // console.log(searchParams.category);
  const category=searchParams.category;
    const {popularData,fetchData,latestData}=await syncData(category)
   

  return (
    <UserLayout>
      <section className='w-full md:w-[80%] px-5 md:px-0 mx-auto'>
        <div className='flex mt-20 flex-col md:flex-row gap-20'>
        <div className='md:w-[70%]'>
        < NewsList data={fetchData.data}/>
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
