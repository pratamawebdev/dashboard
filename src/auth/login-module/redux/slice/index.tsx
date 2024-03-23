import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: LoginState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  successMessage: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.successMessage = "You have successfully logged in";
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    clearSuccessMessage(state) {
      state.successMessage = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  clearError,
  clearSuccessMessage,
} = loginSlice.actions;

export default loginSlice.reducer;
