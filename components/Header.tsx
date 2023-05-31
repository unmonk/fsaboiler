import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { LoginButton } from "./Buttons/LoginButton";
import { LogoutButton } from "./Buttons/LogoutButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">FSA Boiler</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/client" className="mr-5  hover:text-gray-900">
            Protected Client
          </Link>
          <Link href="/protected" className="mr-5  hover:text-gray-900">
            Protected Server
          </Link>
          <Link href="/unprotected" className="mr-5  hover:text-gray-900">
            Public Page
          </Link>
        </nav>
        {session?.user ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  );
}
