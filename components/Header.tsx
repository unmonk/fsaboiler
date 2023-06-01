"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { LoginButton } from "./Buttons/LoginButton";
import { LogoutButton } from "./Buttons/LogoutButton";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            alt="FullStack Academy"
            src="/fsa.png"
            height={25}
            width={25}
          />
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
