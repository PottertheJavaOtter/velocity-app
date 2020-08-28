import { ThunkAction, Action } from '@reduxjs/toolkit';

export type RootState = {
  counter: CounterState;
  app: AppState;
  auth: AuthState;
};

export interface CounterState {
  value: number;
}

export type AppState = {
  mixpanel: boolean;
  error: string;
};

export interface AuthState {
  isAuthenticated: boolean;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
