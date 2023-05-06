import Counter from "@/components/counter";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Counter />
      <div className="flex flex-col">
        <Link href="/about">About</Link>
        <Link href="/data">Data</Link>
        <Link href="/form">Form</Link>
      </div>
    </div>
  );
}
