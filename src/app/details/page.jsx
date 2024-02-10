import NewsDeails from '@/components/NewsDeails'
import PopularNews from '@/components/PopularNews';
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import Subscribe from '@/components/Subscribe';
import LatestNews from '@/components/LatestNews';

const syncData=async(slug)=>{
const fetcher= await fetch(`${process.env.FETCH_URL}/api/news/details?title=${slug}`);
const fetcherPopular= await fetch(`${process.env.FETCH_URL}/api/news/type?type=popular`);
const fetcherLatest = await fetch(`${process.env.FETCH_URL}/api/latestnews/`);
const fetchData= await fetcher.json();

const latestData = await fetcherLatest.json();
const popularData= await fetcherPopular.json();
return {fetchData, popularData,latestData};
}
export default async function page({searchParams}) {
    // console.log(searchParams.title);
    const title=searchParams.title;
    const {popularData,fetchData,latestData}=await syncData(title)
    // console.log(fetchData)
  return (
    <div>
        <UserLayout>
          <section className='w-full flex flex-col md:flex-row my-10 gap-20 md:w-[80%] px-5 md:px-0 mx-auto' >
        <div className='w-[70%] mx-auto'>
        <NewsDeails data={fetchData.data}/>
        </div>
        <div className='w-[30%] mx-auto'>
        <LatestNews data={latestData.data}/>
        <PopularNews data={popularData.data}/>
        <Subscribe/>
        </div>
        </section>

        </UserLayout>
    </div>
  )
}
