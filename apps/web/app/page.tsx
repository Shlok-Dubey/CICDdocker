import { prisma } from "@repo/database/client";

export default async function Home() {
  // Server Component can directly await DB calls
  const users = await prisma.user.findMany();
  console.log(users)

  return (
    <div>
      <h1>hello</h1>
      <h1>{JSON.stringify(users, null, 2)}</h1>
    </div>
  );
}
export const revalidate = 60 ;
