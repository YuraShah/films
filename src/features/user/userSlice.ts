import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state:any, action:PayloadAction<any>) => {
            state.user = action.payload
        }
    }
    // extraReducers: {

    // }
})

export default userSlice.reducer
export const {getUser} = userSlice.actions
