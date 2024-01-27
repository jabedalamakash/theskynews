import Image from "next/image";
import Link from "next/link";

export default function NewsList({ data }) {
  console.log(data);
//   const newsData = data[0]?.news_list;
  return (
    <div>
      <Link
        className="uppercase text-3xl font-bold underline underline-offset-2"
        href={`category?category=${data[0]?.name}`}
      >
        {data[0]?.name}
      </Link>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mt-10">
        {newsData?.map((news) => {
          return (
            <div key={news.id} className="">
              <Image
                src={news.img}
                height={1000}
                width={1000}
                alt={news.title}
                className="mb-4 md:h-[240px]"
              />

              <Link
                className="hover:text-blue-600  text-2xl"
                href={`/details?title=${news.slug}`}
              >
                {news.title}
              </Link>
              <p className="mt-5">{news.short_des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
