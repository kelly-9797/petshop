import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto p-4 flex items-center justify-between gap-3">
      <Image
        className="rounded-full"
        width={55}
        height={55}
        src="/images/logo.png"
        alt="logo"
      />
      <div></div>
      <Link
        href="/sign-in"
        className="bg-primary px-3.5 py-2 rounded font-medium cursor-pointer"
      >
        Đăng nhập
      </Link>
    </header>
  );
}
