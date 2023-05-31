import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <>You are not logged in</>;
  }

  return (
    <>Signed in as {session.user?.name} on a protected Server Rendered page</>
  );
}
