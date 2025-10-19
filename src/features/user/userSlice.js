import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  pastel: "pastel",
  sunset: "sunset",
};

function getThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme") || themes.pastel;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
}

const initialState = {
  user: { username: "Emil" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      console.log("login");
    },
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem("user");
      toast("Успешный выход из системы");
    },
    toggleTheme(state) {
      const { pastel, sunset } = themes;
      state.theme = state.theme === pastel ? sunset : pastel;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
