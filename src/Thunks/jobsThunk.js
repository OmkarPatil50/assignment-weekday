// Importing necessary dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk action to fetch all jobs
export const getAllJobs = createAsyncThunk(
    'jobs/getAllJobs',
    async (pageNumber) => {
        try {
            // Creating request headers
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            // Creating request body
            const raw = JSON.stringify({
                "limit": 9,
                "offset": pageNumber
            });

            // Creating request options
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw
            };

            // Fetching data from the API
            const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                requestOptions
            );
            // Parsing response JSON
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
            // Handling errors
            throw new Error('Failed to fetch jobs');
        }
    }
);
