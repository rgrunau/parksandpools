import { redirect } from "next/navigation";
import prisma from "../../lib/primsa";
import { currentUser } from "@clerk/nextjs";

async function getUserInfo(id: string | undefined) {
  const userData = await prisma.user.findUnique({
    where: {
      userId: id
    },
  })
  return {
    props: {userData},
    revalidate: 10
  }
}

export default async function Home() {
  const loggedInuser = await currentUser()
  let user = await getUserInfo(loggedInuser?.id)
  const userData = user.props.userData
  if (!userData) {
    redirect('/create-profile')
  }
  if (userData) {
    redirect('/dashboard')
  }
  return <div>Home Screen</div>
  
}


