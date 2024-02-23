import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEY } from '../util/Constant';

export const KYCSTATUS = {
  NOT_SUBMIT: "",
  SUBMITED: 'submited',
  REJECTED:'rejected',
  APPROVED: 'approved',
}

export interface UserState {
  _id: string
  phoneNumber: string
  email: string
  firstName: string
  lastName: string
}

export interface ReferralTreeData {
  userName: string;
  avatarUrl: string;
  email: string;
  lastName: string;
  firstName: string;
  status: string;
  packageName: string;
  packageExpiredAt: Date;
  packageStatus: number;
  children: ReferralTreeData[];
  teamValue: number;
}

export interface ProfileState {
  isLogined: boolean
  user: UserState
  access_token: string
}

const initialState = ():ProfileState => {

  let defaultUser = {
    _id: "",
    phoneNumber: "",
    email: "",
    firstName: "",
    lastName: ""
  }

  let token = localStorage.getItem(STORAGE_KEY.TOKEN)
  let user = localStorage.getItem(STORAGE_KEY.USER)
  let isSinged = localStorage.getItem(STORAGE_KEY.IS_SIGNED)

  return {
    isLogined: isSinged == 'true' ? true : false,
    user: user != null ? JSON.parse(user) : defaultUser,
    access_token: token || "",
  };
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileState(state: any, action: PayloadAction<Partial<ProfileState>>) {
      Object.assign(state, action.payload);
    },
  },
});




export const { setProfileState } = profileSlice.actions;

export default profileSlice.reducer;
