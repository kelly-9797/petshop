import Image from "next/image";
import Link from "next/link";
// 332a1f
export default function Home() {
  return (
    <>
      <h1 className="text-[#332a1f] font-poppins font-semibold text-7xl text-center">
        Haru Pet Shop
      </h1>
      <div className="flex gap-5 justify-center -mt-8">
        <Link href="/products/dog">
          <Image
            className="rounded"
            src="/images/banner-dog-tab.png"
            alt="dog-tab"
            width={300}
            height={200}
          />
        </Link>
        <Link href="/products/cat">
          <Image
            className="rounded"
            src="/images/banner-cat-tab.png"
            alt="cat-tab"
            width={210}
            height={200}
          />
        </Link>
      </div>

      <div className="mt-5 w-full">
        <h2 className="font-semibold text-lg">Sản phẩm nổi bật</h2>
        <h3 className="mt-3">Sắp ra mắt, bạn chờ nhé...</h3>
        {/* <ul className="grid grid-cols-4 gap-5 mt-3">
          <li className="h-[320px] bg-blue-700"></li>
          <li className="h-[320px] bg-blue-700"></li>
          <li className="h-[320px] bg-blue-700"></li>
          <li className="h-[320px] bg-blue-700"></li>
          <li className="h-[320px] bg-blue-700"></li>
          <li className="h-[320px] bg-blue-700"></li>
        </ul> */}
      </div>
    </>
  );
}
