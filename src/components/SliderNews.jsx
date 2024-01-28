import Link from 'next/link'
import Image from "next/image";

export default function SliderNews({data}) {
  // console.log(data)
  return (
    <section>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image src={data[0].img}
        width={910}
        height={400} 
        alt={data[0].title}
        className="w-full h-[400px]" />

    <div className='absolute bottom-[5%] mx-auto w-full text-4xl  z-10'>
    <Link href={`/details?title=${data[0].slug}`}>
      <p className='absolute inset-x-0 bottom-0 hover:text-blue-600 bg-white/60 py-10  text-center mx-auto z-10'>{data[0].title}</p>
      </Link> 
    </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide3" className="btn text-white btn-circle">❮</Link> 
      <Link href="#slide2" className="btn text-white btn-circle">❯</Link>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <Image 
    src={data[1].img} 
    width={910}
    height={400}
    alt={data[1].title}
    className="w-full h-[400px]" />
        <div className='absolute bottom-[5%] mx-auto w-full text-4xl  z-10'>
    <Link href={`/details?title=${data[1].slug}`}>
      <p className='absolute inset-x-0 bottom-0 hover:text-blue-600 bg-white/60 py-10  text-center mx-auto z-10'>{data[1].title}</p>
      </Link> 
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide1" className="btn text-white btn-circle">❮</Link> 
      <Link href="#slide3" className="btn text-white  btn-circle">❯</Link>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
  <Image 
    src={data[2].img} 
    width={910}
    height={400}
    alt={data[2].title}
    className="w-full h-[400px]" />
    <div className='absolute bottom-[5%] mx-auto w-full text-4xl  z-10'>
    <Link href={`/details?title=${data[2].slug}`}>
      <p className='absolute inset-x-0 bottom-0 hover:text-blue-600 bg-white/60 py-10  text-center mx-auto z-10'>{data[2].title}</p>
      </Link> 
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide2" className="btn text-white btn-circle">❮</Link> 
      <Link href="#slide1" className="btn text-white btn-circle">❯</Link>
    </div>
  </div>
</div>
      </section>
      
  )
}
