
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import NewsList from '@/components/NewsList';
import PopularNews from '@/components/PopularNews';
// import { useSearchParams } from 'next/navigation'
const syncData=async(name)=>{

  const fetcher= await fetch(`/api/category?category=${name}`);
  const fetcherPopular= await fetch("/api/news/type?type=popular");
  const fetchData= await fetcher.json();
  const popularData= await fetcherPopular.json();
  return {fetchData, popularData};
  }
export default async function page({searchParams}) {
  console.log(searchParams.category);
  const category=searchParams.category;
    const {popularData,fetchData}=await syncData(category)
   

  return (
    <UserLayout>
      <section className='w-full md:w-[80%] px-5 md:px-0 mx-auto'>
        <div className='flex mt-20 flex-col md:flex-row gap-20'>
        <div>
        < NewsList data={fetchData.data}/>
        </div>
        <div>
          <PopularNews data={popularData.data}/>
        </div>
        </div>
        </section>
        
    </UserLayout>
  )
}
