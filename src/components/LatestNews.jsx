import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function LatestNews({data}) {
  console.log(data)
  return (
    <section>
      <h1 className='text-3xl font-bold underline'>Latest News</h1>

<div>
{data.map((news) => {
          return (
            <div key={news.id} className="flex flex-col md:border-2 py-5 md:rounded-xl my-10 gap-5 md:flex-row items-center">
               <div></div>
              <Image
                src={news.img}
                height={500}
                width={500}
                alt={news.title}
                className="mb-4 md:w-[150px] md:h-[100px]"
              />
              <div className=''>
              <Link
                className="hover:text-blue-600  text-lg"
                href={`/details?title=${news.slug}`}
              >
                {news.title}
              </Link>
              </div>

            </div>
          );
        })}
</div>
    </section>
  )
}
