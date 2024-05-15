import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-8">
      <SignUp path="/sign-up" />
    </div>
  );
}
