import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type UserType = "student" | "teacher";

interface AuthState {
  userType: UserType;
}

const initialState: AuthState = {
  userType: "teacher",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
      console.log(action.payload, state.userType);
    },
  },
});

export const { setUserType } = authSlice.actions;

export default authSlice.reducer;