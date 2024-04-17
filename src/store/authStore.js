import Cookies from "js-cookie";
import { create } from "zustand";

const cookie = Cookies.get("token") ? Cookies.get("token") : null;

const isLoggedIn = cookie ? true : false;

const useAuthStore = create((set) => ({
  token: cookie,
  userData: { isLoggedIn: isLoggedIn },
  setAuth: (data) => {
    const { token, userData } = data;
    Cookies.set("token", token, { sameSite: "Lax" });
    set({
      token: token,
      userData: { isLoggedIn: userData.isLoggedIn },
    });
  },
  logout: () => {
    Cookies.remove("token", { sameSite: "Lax" });
    set({
      token: null,
      userData: { isLoggedIn: false },
    });
  },
}));

export default useAuthStore;
