import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>hello Next.js</h1>
    </div>
  );
}
