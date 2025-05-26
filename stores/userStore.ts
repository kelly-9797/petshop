import { create } from "zustand";

type User = {
  _id: string;
  username: string;
  name?: string;
  gender?: string;
  phone?: string;
  address?: string;
};

type UserState = {
  user: User | null;
  isUserFetched: boolean;
  setUser: (user: User | null) => void;
  setUserFetched: (value: boolean) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isUserFetched: false,
  setUser: (user) => set({ user }),
  setUserFetched: (value) => set({ isUserFetched: value }),
}));
