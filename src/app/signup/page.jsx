import UserLayout from "@/components/BodyArchitecture/UserLayout";
import SignUp from "@/components/SignUp";

export default function page() {
  return (
    <UserLayout>
      <div className="w-full md:w-[80%] px-5 md:px-0 mx-auto">
        <SignUp />
      </div>
    </UserLayout>
  );
}
