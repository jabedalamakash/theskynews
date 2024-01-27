import NewsDeails from '@/components/NewsDeails'
import PopularNews from '@/components/PopularNews';
import UserLayout from '@/components/BodyArchitecture/UserLayout'


const syncData=async(slug)=>{
const fetcher= await fetch(`https://theskynews.vercel.app/api/news/details?title=${slug}`);
const fetcherPopular= await fetch("https://theskynews.vercel.app/api/news/type?type=popular");
const fetchData= await fetcher.json();
const popularData= await fetcherPopular.json();
return {fetchData, popularData};
}
export default async function page({searchParams}) {
    // console.log(searchParams.title);
    const title=searchParams.title;
    const {popularData,fetchData}=await syncData(title)
    // console.log(fetchData)
  return (
    <div>
        <UserLayout>
          <section className='w-full flex flex-col md:flex-row my-10 gap-20 md:w-[80%] px-5 md:px-0 mx-auto' >
        <div className='w-[70%] mx-auto'>
        <NewsDeails data={fetchData.data}/>
        </div>
        <div className='w-[30%] mx-auto'>
        <PopularNews data={popularData.data}/>
        </div>
        </section>

        </UserLayout>
    </div>
  )
}
