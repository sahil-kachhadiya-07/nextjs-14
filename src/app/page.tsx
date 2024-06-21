import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href={"./invoices"}>
          <button>go to invoice</button>
        </Link>
        <br/>
        <Link href={"./images"}>
          <button>go to images</button>
        </Link>
      </div>
    </main>
  );
}
