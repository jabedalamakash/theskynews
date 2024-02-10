import Image from "next/image";
import Link from "next/link";
import UserLayout from "@/components/BodyArchitecture/UserLayout";
export default function notFound() {
  return (
    <section className="w-full">
        <UserLayout>
      <main className="w-full md:w-[80%] py-20 mx-auto px-5 md:px-0">
        <div>
          <Image
            src={"/back.svg"}
            alt={"back"}
            height={500}
            width={500}
            priority
            className=" w-[50%] h-[50%] p-10 mx-auto mb-5"
          />

          <div className="mb-5 text-center ">

          <p className="text-2xl mb-3 font-bold">Page Not Found</p>
          <Link href={"/"}>
            <button className="text-white px-5 py-3 rounded-xl bg-[#20B15A]">Back To Home</button>
          </Link>

          </div>

        </div>
      </main>
      </UserLayout>
    </section>
  );
}