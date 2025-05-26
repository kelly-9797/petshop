"use client";

import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Link
        href="/blogs/7-sai-lam-khi-cham-soc-thu-cung"
        className="bg-white rounded-lg shadow p-4 border border-solid border-transparent transition-all hover:bg-primary "
      >
        <h3 className="font-semibold text-center">
          7 sai lầm khi chăm sóc thú cưng
        </h3>
        <div className="mt-3 w-full h-[280px] rounded-lg relative overflow-hidden">
          <Image
            className="object-cover"
            src="/images/blog/2.jpeg"
            fill
            alt="png"
          />
        </div>
      </Link>
    </div>
  );
}
