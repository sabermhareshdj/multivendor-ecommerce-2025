import { SignUp } from "@clerk/nextjs";

export default function SingUpPage() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <SignUp />
    </div>
  )
}
