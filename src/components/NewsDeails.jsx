import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import parser from 'html-react-parser'
export default function NewsDeails({data}) {
  console.log(data)
  
  const options= {day:'numeric', month:'long', year:'numeric'}
   const formattedDate=new Date(data[0].createdAt)

  const date= formattedDate.toLocaleString('en-BD',options);
  console.log(date)
  return (
    <div>
      
        <Link className='text-3xl  text-blue-600 underline  font-bold' href={`/category?category=${data[0].categories.name}`}><p className='uppercase'>{data[0].categories.name}</p>
          </Link>
        <h1 className='font-bold mt-6 mb-3 text-3xl'>{data[0].title}</h1>
        <p>{data[0].author}</p>
        <p className='mt-3 mb-10 py-2 border-b-2'>{date}</p>

       

        <Image
                src={data[0].img}
                height={1000}
                width={1000}
                alt={data[0].title}
                className="mb-4 md:h-[300px]"
              />
              {
                parser(data[0].long_des)
              }

    </div>
  )
}
