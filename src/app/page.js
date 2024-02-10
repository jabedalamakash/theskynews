import UserLayout from "@/components/BodyArchitecture/UserLayout";
import NewsList from "@/components/NewsList";
import PopularNews from "@/components/PopularNews";
import LatestNews from "@/components/LatestNews";
import SliderNews from "@/components/SliderNews";
import Subscribe from "@/components/Subscribe";

const syncData = async () => {
  const fetcherSports = await fetch(
    `${process.env.FETCH_URL}/api/category?category=Sports`
  );
  const fetcherTech = await fetch(
    `${process.env.FETCH_URL}/api/category?category=Tech`
  );
  const fetcherEntertainment = await fetch(
    `${process.env.FETCH_URL}/api/category?category=Entertainment`
  );
  const fetcherPopular = await fetch(
    `${process.env.FETCH_URL}/api/news/type?type=popular`
  );
  const fetcherFeatured = await fetch(
    `${process.env.FETCH_URL}/api/news/type?type=featured`
  );

  const fetcherLatest = await fetch(`${process.env.FETCH_URL}/api/latestnews/`);
  const sportsData = await fetcherSports.json();
  const techData = await fetcherTech.json();
  const enterData = await fetcherEntertainment.json();
  const popularData = await fetcherPopular.json();
  const featureData = await fetcherFeatured.json();
  const latestData = await fetcherLatest.json();
  return {
    sportsData: sportsData,
    techData: techData,
    enterData: enterData,
    featureData: featureData,
    popularData: popularData,
    latestData: latestData,
  };
};
export default async function Home() {
  const { sportsData, techData, enterData, featureData, popularData,latestData } =
    await syncData();
 console.log(enterData)
  return (
    <UserLayout>
      <section className="w-full md:w-[80%] px-5 md:px-0 mx-auto">
        <div className="my-14">
          <SliderNews data={featureData.data} />
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <section>
            <div className="mb-20">
            <NewsList data={sportsData.data} />
            </div>
            <div className="mb-20">
            <NewsList data={techData.data} />
            </div>
            <div className="mb-20">
            <NewsList data={enterData.data} />
            </div>
           
            
            
          </section>
          <div>
          <LatestNews data={latestData.data}/>
            <PopularNews data={popularData.data} />
            <Subscribe />
          </div>
        </div>

        
      </section>
    </UserLayout>
  );
}
