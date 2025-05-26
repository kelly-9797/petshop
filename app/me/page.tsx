"use client";

import { useEffect } from "react";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useUserStore } from "stores/userStore";
import axiosCustom from "@/lib/axiosCustom";
import { AxiosError } from "axios";
import RequireAuth from "components/route-guards/RequireAuth";

const schema = z.object({
  username: z.string().min(6, "Tài khoản tối thiểu 6 ký tự"),
  name: z.string().optional(),
  phone: z
    .string()
    .or(z.literal(""))
    .refine((val) => val === "" || /^\d{10}$/.test(val), {
      message: "Số điện thoại phải gồm đúng 10 chữ số",
    })
    .refine((val) => val === "" || val.startsWith("0"), {
      message: "Số điện thoại phải bắt đầu bằng số 0",
    }),
  address: z.string().optional(),
  gender: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Me() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { user } = useUserStore();

  const handleUpdateInfo = async (data: FormData) => {
    try {
      await axiosCustom.put("/me", data);
    } catch (err) {
      const error = err as AxiosError;
      if (error.response && error.response.data) {
        const data = error.response.data as { message: string };
        console.log("❌ Lỗi:", data?.message);
      } else {
        alert("Đã có lỗi xảy ra!");
        console.error("❌ Lỗi không xác định:", err);
      }
    }
  };

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        name: user.name || "",
        gender: user.gender || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user, reset]);

  return (
    <RequireAuth>
      <div className="w-full flex justify-center">
        <div className="bg-bg text-black shadow-2xl rounded-lg p-5 flex flex-col max-w-[550px] w-full relative">
          <form
            onSubmit={handleSubmit(handleUpdateInfo)}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-1">
              <label className="w-[150px]" htmlFor="username">
                Tài khoản
              </label>
              <input
                {...register("username")}
                id="username"
                type="text"
                disabled
                placeholder="Tài khoản"
                className="bg-white text-black border border-solid rounded px-2 py-1.5 w-[280px]"
              />
            </div>
            <div className="flex items-center gap-1">
              <label className="w-[150px]" htmlFor="name">
                Tên
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Tên"
                className="bg-white text-black border border-solid rounded px-2 py-1.5 w-[280px]"
              />
            </div>
            <div className="flex items-center gap-1">
              <label className="w-[150px]" htmlFor="name">
                Giới tính
              </label>
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex"
                    defaultValue="Nam"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="text-black"
                        value="Nam"
                        id="male"
                      />
                      <label htmlFor="male">Nam</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="text-black"
                        value="Nữ"
                        id="female"
                      />
                      <label htmlFor="female">Nữ</label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="flex items-center gap-1">
              <label className="w-[150px]" htmlFor="phone">
                Số điện thoại
              </label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                placeholder="Số điện thoại"
                className="bg-white text-black border border-solid rounded px-2 py-1.5 w-[280px]"
              />
              {/* <button className="underline underline-offset-2 text-sm">
              Xác thực
            </button> */}
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex items-center gap-1">
              <div className="w-[150px]"></div>
              {/* <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP> */}
            </div>

            <div className="flex items-center gap-1">
              <label className="w-[150px]" htmlFor="address">
                Địa chỉ
              </label>
              <input
                {...register("address")}
                id="address"
                type="text"
                placeholder="Địa chỉ"
                className="bg-white text-black border border-solid rounded px-2 py-1.5 w-[280px]"
              />
            </div>

            <button className="mt-4 bg-primary text-black px-3.5 py-1.5 rounded font-medium cursor-pointer">
              Cập nhật
            </button>
          </form>
        </div>
      </div>
    </RequireAuth>
  );
}
