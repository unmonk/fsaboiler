"use client";
import { useSession } from "next-auth/react";
export default function UserClient() {
  const { data: session, status } = useSession();
  if (!session) return <>You are not logged in</>;

  return <>Client Rendered Component with {session.user?.name} logged in</>;
}
