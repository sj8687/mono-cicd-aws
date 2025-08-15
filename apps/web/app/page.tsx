import { PrismaClient } from "db/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'