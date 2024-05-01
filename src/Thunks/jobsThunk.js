import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllJobs = createAsyncThunk('jobs/getAllJobs', async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
        };
        const response = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions
        );
        const result = await response.json();
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
})