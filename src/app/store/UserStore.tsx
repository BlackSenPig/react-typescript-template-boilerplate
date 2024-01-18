import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// interface UserStoreType {
//   jwtToken?: string;
// }

interface IUserStatus {
  jwtToken?: string;
  name?: string;
  key?: string;
  makeOrderStatusStore?: boolean;
  followStatusStore?: boolean;
  setMakeStatusStore: (status: boolean) => void;
  setFollowStatusStore: (status: boolean) => void;
  setkey: (pass: string) => void;
  setJwt: (jwtToken: string) => void;
  clearJwt: () => void;
  getJwt: () => string | undefined;
  logout: () => void;
}

export const useUserStore = create<IUserStatus>()(
  persist(
    (set, get) => ({
      jwtToken: undefined,
      followStatusStore: false,
      makeOrderStatusStore: undefined,
      name: "guest",

      setJwt: (jwtToken: string) =>
        set(() => ({
          jwtToken: jwtToken,
        })),

      clearJwt: () =>
        set(() => ({
          jwtToken: undefined,
        })),

      getJwt: () => {
        return get().jwtToken;
      },

      setkey: (key: string) =>
        set(() => ({
          key: key,
        })),

      logout: () =>
        set(() => ({
          jwtToken: undefined,
          key: undefined,
        })),

      setMakeStatusStore: (stutus: boolean) =>
        set(() => ({
          makeOrderStatusStore: stutus,
        })),

      setFollowStatusStore: (stutus: boolean) =>
        set(() => ({
          followStatusStore: stutus,
        })),
    }),
    {
      name: "user-storage",
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          return {
            state: {
              ...JSON.parse(str || "").state,
            },
          };
        },
        setItem: (name, newValue) => {
          const str = JSON.stringify({
            state: {
              ...newValue.state,
            },
          });
          localStorage.setItem(name, str);
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
