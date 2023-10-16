import { createSlice } from "@reduxjs/toolkit";



const initialState = {
   sidebar: false
}

const sidebar = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
      sidebarTrue: (state) => {
        state.sidebar = true;
      },
      sidebarFalse : (state) => {
       
       state.sidebar = false

      }
    },
  })
  
  export const { sidebarFalse, sidebarTrue } = sidebar.actions;
  

  
  export default sidebar.reducer