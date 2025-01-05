import { SignIn } from "@clerk/nextjs";

export default function SingInPage() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <SignIn />
    </div>
  )
}
