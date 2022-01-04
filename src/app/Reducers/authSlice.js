import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: {},
    },
    reducers: {
      authUser: (state, action) => {
        state.auth = action.payload
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { auth } = authSlice.actions
  
  export default authSlice.reducer