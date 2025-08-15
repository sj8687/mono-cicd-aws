export default async function Home() {
  const res = await fetch("http://localhost:8080/user", {
    next: { revalidate: 60 } // revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = await res.json();

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
