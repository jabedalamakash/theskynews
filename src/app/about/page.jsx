import UserLayout from "@/components/BodyArchitecture/UserLayout";
import parse from "html-react-parser";

const syncData = async (title) => {
  const fetcher = await fetch(
    `/api/policies?type=${title}`
  );
  // 
  const fetchData = await fetcher.json();
  return fetchData;
};
export default async function page({ searchParams }) {
  console.log(searchParams.page);

  const about = searchParams.page;

  const { data } = await syncData(about);
  // console.log(data[0].long_des);
  return (
    <UserLayout>
      <div className="w-full md:w-[80%] px-5 md:px-0 py-10 md:py-20 mx-auto">
        <h1 className='text-center font-bold text-3xl mb-5 md:mb-10'>About Us</h1>
        <article className="md:w-[60%] mx-auto" >
          {parse(data[0].long_des)}
          </article>
      </div>
    </UserLayout>
  );
}
