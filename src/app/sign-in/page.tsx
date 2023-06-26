import { SignIn } from "@clerk/nextjs";

export default function Page() {

  return(
      <div className="w-full flex flex-col items-center justify-center py-8 px-2">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-primary-green">Parks and Pools</h1>
        </div>
        <div>
          <SignIn />
        </div>
      </div>
     
    );
}