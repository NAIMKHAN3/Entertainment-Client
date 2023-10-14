import { createSlice } from "@reduxjs/toolkit";

interface IUser {
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
      }
    },
  })
  
  export const { userAdded } = authSlice.actions;
  

  
  export default authSlice.reducer