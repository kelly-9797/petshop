import Image from "next/image";
import Link from "next/link";
import IProduct from "types/product.type";

type ProductProps = {
  product: IProduct;
};

export default function Product({ product }: ProductProps) {
  return (
    <div className="shadow rounded-lg">
      <div className="relative w-full h-[300px] rounded-tl-lg rounded-tr-lg overflow-hidden bg-white">
        <Image
          className="mx-auto w-full"
          fill
          src={product.image}
          alt={product.name}
        />

        {!product.stock && (
          <span className="bg-red-500 text-white px-2 py-1 absolute top-0 left-0">
            Hết hàng
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1">
        <Link
          className="inline-block font-semibold w-fit hover:underline hover:underline-offset-4"
          href=""
        >
          {product.name}
        </Link>
        <span className="">
          {/* {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)} */}
          Sắp ra mắt, bạn chờ nhé...
        </span>
        {/* <button className="bg-primary py-2 text-sm rounded-lg mt-2">
          Thêm vào giỏ hàng
        </button> */}
      </div>
    </div>
  );
}
