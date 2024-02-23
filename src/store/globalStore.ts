import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalState(state: any, action: PayloadAction<Partial<State>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setGlobalState } = globalSlice.actions;

export default globalSlice.reducer;
