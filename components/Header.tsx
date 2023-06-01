"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { LoginButton } from "@/components/Buttons/LoginButton";
import { LogoutButton } from "@/components/Buttons/LogoutButton";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="text-gray-600 body-font ">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-sm border-b">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <Image
            alt="FullStack Academy"
            src="/fsa.png"
            height={25}
            width={25}
          />
          <span className="ml-3 text-xl dark:text-white dark:hover:text-red-800">
            FSA Boiler
          </span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/client"
            className="mr-5 dark:text-gray-200 hover:text-gray-900 dark:hover:text-red-800"
          >
            Protected Client
          </Link>
          <Link
            href="/protected"
            className="mr-5 dark:text-gray-200 hover:text-gray-900  dark:hover:text-red-800"
          >
            Protected Server
          </Link>
          <Link
            href="/unprotected"
            className="mr-5 dark:text-gray-200  hover:text-gray-900 dark:hover:text-red-800 "
          >
            Public Page
          </Link>
        </nav>
        <ThemeToggle />
        {session?.user ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  );
}
