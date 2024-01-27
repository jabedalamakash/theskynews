"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"



export default function Navbar({data}) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col md:flex-row mx-auto justify-center md:justify-between py-5">
        <nav className="space-x-5 overflow-x-auto mb-5 md:mb-0 ">
          <Link className={`link ${pathname === '/' ? 'font-bold' : 'md:text-lg'}`} href={"/"}>Home</Link>
          {
            data.map((item)=>{
               const url=(item.name).toLowerCase()
              return (
                <Link className={`link ${pathname === `/${url}` ? 'font-bold' : 'md:text-lg'}`} key={item.id} href={`/category?category=${item.name}`}>{item.name}</Link>
                // <Link className="text-lg font-bold" key={item.id} href={""}>{item.name}</Link>
              )
            })
          }

        </nav>
        <div className="flex mx-auto md:mx-0 gap-5">
          <input type="text" className="border-2 px-3 border-gray-700 rounded-lg" placeholder="search" />
          <button className=" px-3 bg-blue-600 text-white rounded-lg">Submit</button>
        </div>

    </div>
  )
}
