import { configureStore } from '@reduxjs/toolkit'
import { jobSlice } from './Slices/jobSlice'

export const store = configureStore({
    reducer: {
        jobs: jobSlice.reducer
    }
})