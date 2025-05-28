"use client";

import { usePathname } from "next/navigation";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";

// import axiosCustom from "@/lib/axiosCustom";
// import { useUserStore } from "stores/userStore";
// import { useEffect } from "react";

const menuLinks = [
  {
    path: "/products/dog",
    title: "Cho chó",
  },
  {
    path: "/products/cat",
    title: "Cho mèo",
  },
  {
    path: "/blogs",
    title: "Chăm sóc thú cưng",
  },
];

export default function Header() {
  const pathname = usePathname();
  // const router = useRouter();
  // const { user, setUser, isUserFetched, setUserFetched } = useUserStore();

  const noHeaderRoutes = ["/auth/sign-in", "/auth/sign-up"];
  const showHeader = !noHeaderRoutes.includes(pathname);
  const isActive = (path: string) => pathname.startsWith(path);

  // const handleLogout = async () => {
  //   try {
  //     await axiosCustom.post("/logout");
  //     setUser(null);
  //     router.push("/");
  //   } catch (err) {
  //     console.error("Lỗi đăng xuất:", err);
  //   }
  // };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await axiosCustom.get("/me");
  //       setUser(res.data);
  //     } catch {
  //       setUser(null);
  //     } finally {
  //       setUserFetched(true);
  //     }
  //   };

  //   fetchUser();
  // }, [setUser, setUserFetched]);

  return (
    <>
      {showHeader && (
        <header className="container mx-auto p-4 flex flex-col items-center justify-between gap-4 lg:flex-row">
          <Link className="w-fit lg:w-[231px]" href="/">
            <Image
              className="rounded-full"
              width={65}
              height={65}
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-10 font-semibold">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  isActive(link.path) ? "underline underline-offset-4" : ""
                } hover:underline hover:underline-offset-4`}
              >
                {link.title}
              </Link>
            ))}
            {/* <Link
              href="/products/dog"
              className={`${isActive(
                ""
              )} hover:underline hover:underline-offset-5`}
            >
              Cho chó
            </Link>
            <Link
              href="/products/cat"
              className={`hover:underline hover:underline-offset-5`}
            >
              Cho mèo
            </Link>
            <Link
              href="/blogs"
              className={`hover:underline hover:underline-offset-5`}
            >
              Chăm sóc thú cưng
            </Link> */}
          </div>

          {/* <div className="flex items-center gap-5">
            <Link className="relative" href="/cart">
              <span className="absolute -right-2 -top-3 p-1 bg-primary rounded-lg flex items-center justify-center text-center text-xs font-medium">
                20
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
              </svg>
            </Link>

            {isUserFetched &&
              (user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 focus:outline-none">
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                      </svg>
                      <span>Tài khoản</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link className="cursor-pointer" href="/me">
                        Thông tin cá nhân
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link className="cursor-pointer" href="">
                        Đổi mật khẩu
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link className="cursor-pointer" href="">
                        Lịch sử đặt hàng
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-1.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                        </svg>
                        <span>Đăng xuất</span>
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href="/auth/sign-in"
                  className="bg-primary px-3 py-1.5 rounded font-medium cursor-pointer"
                >
                  Đăng nhập
                </Link>
              ))}
          </div> */}
          <div className="w-fit lg:w-[231px] flex items-center gap-2">
            <span>Hotline:</span>
            <a
              className="bg-primary px-3 py-1.5 rounded flex items-center gap-1"
              href="tel:+84365845066"
            >
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <span className="font-medium">0365.845.066</span>
            </a>
          </div>
        </header>
      )}
    </>
  );
}
