import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id?: string;
    name: string | null;
    email: string | null;
    profileImg: string | null;
    address: string | null;
    role: string | null;
    contactNo: string | null;
}

const initialState:IUser = {
    name: null,
    email: null,
    profileImg: null,
    address: null,
    role: null,
    contactNo: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      userAdded: (state,action:any) => {
        console.log(action.payload)
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.address = action.payload.address;
        state.profileImg = action.payload.profileImg;
        state.contactNo = action.payload.contactNo;
        state.role = action.payload.role;
        console.log({state})
      },
      removeUser : (state) => {
        state.name = null;
        state.email = null;
        state.profileImg = null;
        state.address = null;
        state.role = null;
        localStorage.removeItem('user')
        localStorage.removeItem('token')

      }
    },
  })
  
  export const { userAdded, removeUser } = authSlice.actions;
  

  
  export default authSlice.reducer