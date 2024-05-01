import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs } from "../Thunks/jobsThunk";

const initialStateForJobs = {
    jobs: [],
    loading: false,
    error: null
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState: initialStateForJobs,
    extraReducers: (builder) => {
        builder.addCase(getAllJobs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllJobs.fulfilled, (state, action) => {
            state.loading = false
            state.jobs = action.payload
        })
        builder.addCase(getAllJobs.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.error
        })
    }
})