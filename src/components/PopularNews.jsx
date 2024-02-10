import Image from "next/image";
import Link from "next/link";

export default function PopularNews({ data }) {
  // console.log(data);
  const newsData = data;
  return (
    <div>
      <Link
        className="uppercase text-3xl font-bold underline underline-offset-2"
        href={`category?category=${data[0].name}`}
      >
        Popular News
      </Link>
      <div className="mt-10">
        {newsData.map((news) => {
          return (
            <div key={news.id} className="gap-10 mb-10">
              <Image
                src={news.img}
                height={1000}
                width={1000}
                alt={news.title}
                className="mb-4"
              />

              <Link
                className="hover:text-blue-600 mt-10 text-2xl"
                href={`/details?title=${news.slug}`}
              >
                {news.title}
              </Link>
              {/* <p className="mt-5">{news.short_des}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
