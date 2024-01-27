"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar({ data }) {
  const obj = {
    text: "",
  };
  const [search, setSearch] = useState({ ...obj });

  const handleChange = (key, value) => {
    setSearch({
      ...search,
      [key]: value,
    });
  };

  const pathname = usePathname();
  console.log(pathname);
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row mx-auto md:mx-0 justify-center md:justify-between py-5">
      <nav className="space-x-5 overflow-x-auto mb-5 md:mb-0 ">
        <Link
          className={`link ${pathname === "/" ? "font-bold" : "md:text-lg no-underline"}`}
          href={"/"}
        >
          Home
        </Link>
        {data.map((item) => {
          return (
            <Link
              className={`link ${
                pathname === `/category?category=${item.name}` ? "font-bold" : "md:text-lg no-underline"
              }`}
              key={item.id}
              href={`/category?category=${item.name}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-5">
        <div className="flex  mx-auto md:mx-0 gap-5">
          <input
            type="text"
            value={search.text}
            onChange={(e) => {
              handleChange("text", e.target.value);
            }}
            className="border-2 px-3 border-gray-700 rounded-lg"
            placeholder="search"
          />
          <button className="px-3 bg-blue-600 border  text-white py-2 rounded-lg ">
            Search
          </button>
        </div>
        <div className="">
          <Link href={"/signin"}>
            <button className="px-3 border font-bold border-blue-600 text-blue-600  bg-white  py-2 rounded-lg">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
