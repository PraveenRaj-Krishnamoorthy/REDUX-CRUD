import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUser: [
        { user: "mount", email: "mount@gmail.com", num: "987", gender: "male", designation: "HR", course: "B.Sc/M.Sc" }
    ],
    updated: [],
    deleted: []
}

export const SliceVar = createSlice({
    name: "SliceName",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.allUser = [...state.allUser, { ...action.payload }]
        },
        updateUser: (state, action) => {
            const { upId, formData } = action.payload;
            state.updated = [...state.updated, { ...state.allUser[upId] }]
            state.allUser[upId] = { ...formData }
        },
        deleteUser: (state, action) => {
            state.deleted = [...state.deleted, { ...state.allUser[action.payload] }]
            state.allUser = state.allUser.filter((e, i) => (i !== action.payload))
        }
    }
})

export const { addUser, updateUser, deleteUser } = SliceVar.actions;
export default SliceVar.reducer;