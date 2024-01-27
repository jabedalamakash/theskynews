
import UserLayout from "@/components/BodyArchitecture/UserLayout";
import NewsList from "@/components/NewsList";
import PopularNews from "@/components/PopularNews";
import LatestNews from "@/components/LatestNews";
import SliderNews from "@/components/SliderNews";


const syncData=async()=>{
  const fetcherSports= await fetch("https://theskynews.vercel.app/api/category?category=Sports");
  const fetcherTech= await fetch("https://theskynews.vercel.app/api/category?category=Tech");
  const fetcherEntertainment= await fetch("https://theskynews.vercel.app/category?category=Entertainment");
  const fetcherPopular= await fetch("https://theskynews.vercel.app/api/news/type?type=popular");
  const fetcherFeatured= await fetch("https://theskynews.vercel.app/api/news/type?type=featured");
  const sportsData= await fetcherSports.json();
  const techData= await fetcherTech.json();
  const enterData= await fetcherEntertainment.json();
  const popularData= await fetcherPopular.json();
  const featureData= await fetcherFeatured.json();
  return {sportsData:sportsData,techData:techData,enterData:enterData, featureData:featureData,popularData:popularData};
  }
export default async function Home() {
  const {sportsData,techData,enterData,featureData,popularData}=await syncData();
  // console.log(featureData.data)
  return (
    <UserLayout>

<section className='w-full md:w-[80%] my-20 px-5 md:px-0 mx-auto'>
      <div className="py-10">
      <SliderNews data={featureData.data}/>
      </div>


    <div className="flex flex-col md:flex-row gap-20">
      <div>
      <NewsList data={sportsData.data}/>
      <NewsList data={techData.data}/>
      <NewsList data={enterData.data}/>
      </div>
      <div>
      <PopularNews data={popularData.data}/>
      </div>
    </div>


 
  {/* <LatestNews/> */}

  </section>
    </UserLayout>
  );
}
