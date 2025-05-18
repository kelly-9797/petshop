"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import axiosCustom from "@/lib/axiosCustom";
import { AxiosError } from "axios";

export default function SignUpPage() {
  const router = useRouter();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosCustom.post("/register", {
        username,
        password,
      });

      router.push("/sign-in");
    } catch (err) {
      const error = err as AxiosError;
      if (error.response && error.response.data) {
        const data = error.response.data as { message: string };
        console.log("❌ Lỗi đăng ký:", data.message);
      } else {
        alert("Đã có lỗi xảy ra!");
        console.error("❌ Lỗi không xác định:", err);
      }
    }
  };
  return (
    <div className="min-h-screen container mx-auto p-4 flex items-center justify-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label className="w-20" htmlFor="username">
            Tài khoản
          </label>
          <input
            id="username"
            type="text"
            placeholder="Tài khoản"
            className="bg-white text-black rounded px-2 py-1"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-20" htmlFor="password">
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            placeholder="Mật khẩu"
            className="bg-white text-black rounded px-2 py-1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button className="bg-blue-600 py-1.5 px-3 w-fit rounded">
          Đăng ký
        </button>
      </form>
    </div>
  );
}
