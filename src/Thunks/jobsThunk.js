import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllJobs = createAsyncThunk('jobs/getAllJobs', async (pageNumber) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "limit": 10,
            "offset": pageNumber
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };
        const response = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions
        );
        const result = await response.json();
        return result.jdList
    } catch (error) {
        console.log(error)
    }
})