import Image from "next/image";
import AuthForm from "@/app/(site)/components/AuthForm";


export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12  sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image className="mx-auto w-auto" src="/images/logo.png" alt="Logo" height="48" width="48" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tighter text-gray-900" >
          Sign In to your account
        </h2>
      </div>
      <AuthForm/>
    </div>
  );
}
