"use client";
import Product from "components/product/Product";
import Image from "next/image";
import { useEffect, useState } from "react";
import IProduct from "types/product.type";
import { v4 as uuidv4 } from "uuid";

const categories = [
  { label: "Tất cả sản phẩm", slug: "all" },
  { label: "Thức ăn", slug: "food" },
  { label: "Phụ kiện", slug: "accessory" },
];

const products: IProduct[] = [
  {
    id: uuidv4(),
    name: "Vòng cổ cho chó 1",
    image:
      "https://res.cloudinary.com/dupbbdzhn/image/upload/v1748176732/harupetshop/cho-vongco-1.png",
    stock: 40,
    price: 300000,
    category: "accessory",
  },
  {
    id: uuidv4(),
    name: "Vòng cổ cho chó 2",
    image:
      "https://res.cloudinary.com/dupbbdzhn/image/upload/v1748176733/harupetshop/cho-vongco-2.png",
    stock: 40,
    price: 249000,
    category: "accessory",
  },
  {
    id: uuidv4(),
    name: "Vòng cổ cho chó 3",
    image:
      "https://res.cloudinary.com/dupbbdzhn/image/upload/v1748176734/harupetshop/cho-vongco-3.png",
    stock: 40,
    price: 200000,
    category: "accessory",
  },
  {
    id: uuidv4(),
    name: "Vòng cổ cho chó 4",
    image:
      "https://res.cloudinary.com/dupbbdzhn/image/upload/v1748176736/harupetshop/cho-vongco-4.png",
    stock: 40,
    price: 150000,
    category: "accessory",
  },
];

export default function DogProducts() {
  const [category, setCategory] = useState<string>("all");
  const [productFiltered, setProductFiltered] = useState<IProduct[]>(products);
  const handleClick = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    if (category === "all") {
      setProductFiltered(products);
      return;
    } else {
      setProductFiltered(
        products.filter((product) => product.category === category)
      );
    }
  }, [category]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-semibold text-2xl">Haru Pet Shop - Đồ cho chó</h2>
        <Image
          className="rounded"
          src="/images/banner-dog-tab.png"
          alt="dog-tab"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full">
        <div className="flex gap-3">
          {categories.map((item) => (
            <button
              key={item.slug}
              onClick={() => handleClick(item.slug)}
              className={`px-4 py-2 border rounded ${
                category === item.slug
                  ? "bg-black text-white "
                  : "bg-white text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {productFiltered.length > 0 &&
            productFiltered?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </ul>
      </div>
    </div>
  );
}
