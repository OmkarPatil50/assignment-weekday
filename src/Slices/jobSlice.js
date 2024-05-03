// Importing necessary dependencies
import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs } from "../Thunks/jobsThunk";

// Initial state for jobs slice
const initialStateForJobs = {
    jobs: [],
    filteredJobs: [],
    loading: false,
    error: null,
    page: 0,
    selectedRole: "",
    selectedEmployeeCount: "",
    selectedExperience: "",
    selectedLocation: "",
    selectedSalary: "",
    selectedCompanyName: "",
}

// Creating the jobSlice
export const jobSlice = createSlice({
    name: 'jobs',
    initialState: initialStateForJobs,
    reducers: {
        // Reducer for setting role filter
        setRoleFilter(state, action) {
            state.selectedRole = action.payload;
            state.filteredJobs = filterJobs(state);
        },
        // Reducer for setting employee count filter
        setEmployeeCountFilter(state, action) {
            state.selectedEmployeeCount = action.payload;
            state.filteredJobs = filterJobs(state);
        },
        // Reducer for setting experience filter
        setExperienceFilter(state, action) {
            state.selectedExperience = action.payload;
            state.filteredJobs = filterJobs(state);
        },
        // Reducer for setting location filter
        setLocationFilter(state, action) {
            state.selectedLocation = action.payload;
            state.filteredJobs = filterJobs(state);
        },
        // Reducer for setting salary filter
        setSalaryFilter(state, action) {
            state.selectedSalary = action.payload;
            state.filteredJobs = filterJobs(state);
        },
        // Reducer for setting company name filter
        setCompanyNameFilter(state, action) {
            state.selectedCompanyName = action.payload;
        },
    },
    // Extra reducers for handling API requests
    extraReducers: (builder) => {
        builder.addCase(getAllJobs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllJobs.fulfilled, (state, action) => {
            state.loading = false
            state.jobs = [...state.jobs, ...action?.payload?.jdList]
            state.filteredJobs = [...state.filteredJobs, ...action?.payload?.jdList]
            state.page++
        })
        builder.addCase(getAllJobs.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.error
        })
    }
})

// Function to filter jobs based on selected filters
const filterJobs = (state) => {
    let getFilteredJobs = [...state.jobs];

    if (state.selectedRole !== "") {
        getFilteredJobs = getFilteredJobs.filter((job) => job.jobRole === state.selectedRole);
    }

    if (state.selectedEmployeeCount !== "") {
        getFilteredJobs = getFilteredJobs.filter((job) => {
            const employeeCount = parseInt(job.employeeCount);
            if (state.selectedEmployeeCount === "10") {
                return employeeCount <= 10;
            } else if (state.selectedEmployeeCount === "50") {
                return employeeCount > 10 && employeeCount <= 50;
            } else if (state.selectedEmployeeCount === "100") {
                return employeeCount > 50 && employeeCount <= 100;
            } else if (state.selectedEmployeeCount === "101") {
                return employeeCount > 100;
            }
            return true;
        });
    }

    if (state.selectedExperience !== "") {
        getFilteredJobs = getFilteredJobs.filter((job) => {
            const experience = parseInt(job.minExp);
            if (state.selectedExperience === 0) {
                return true
            } else {
                return state.selectedExperience >= experience
            }
        });
    }

    if (state.selectedLocation !== "") {
        getFilteredJobs = getFilteredJobs.filter((job) => job.location === state.selectedLocation);
    }

    if (state.selectedSalary !== "") {
        getFilteredJobs = getFilteredJobs.filter((job) => {
            const salary = parseInt(job.minJdSalary);
            const maxSalary = parseInt(job.maxJdSalary);
            if (!salary || !maxSalary) return true
            if (state.selectedSalary === 10) {
                return salary <= 10;
            } else if (state.selectedSalary === 20) {
                return salary > 10 && salary <= 20;
            } else if (state.selectedSalary === 50) {
                return salary > 20 && maxSalary <= 50;
            } else if (state.selectedSalary === 51) {
                return salary > 50;
            }
            return true;
        });
    }

    if (state.selectedCompanyName !== "") {
        const companyNameSearch = state.selectedCompanyName.toLowerCase();
        getFilteredJobs = getFilteredJobs.filter((job) =>
            job.companyName.toLowerCase().includes(companyNameSearch)
        );
    }

    return getFilteredJobs;
};

// Exporting actions and reducer
export const {
    setRoleFilter,
    setEmployeeCountFilter,
    setExperienceFilter,
    setLocationFilter,
    setSalaryFilter,
    setCompanyNameFilter
} = jobSlice.actions;

export default jobSlice.reducer;
