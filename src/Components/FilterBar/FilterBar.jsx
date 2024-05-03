// Importing necessary components and styles
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setRoleFilter,
  setEmployeeCountFilter,
  setExperienceFilter,
  setLocationFilter,
  setSalaryFilter,
  setCompanyNameFilter,
} from "../../Slices/jobSlice";

// Defining the FilterBar functional component
const FilterBar = () => {
  // Extracting filter state variables from Redux store
  const {
    selectedSalary,
    selectedLocation,
    selectedExperience,
    selectedEmployeeCount,
    selectedRole,
    selectedCompanyName,
    jobs,
  } = useSelector((state) => state.jobs);

  // Accessing Redux dispatch function
  const dispatch = useDispatch();

  // Function to get all unique job roles from the jobs data
  const getAllRoles = jobs?.reduce((acc, curr) => {
    return acc?.some((item) => item === curr?.jobRole)
      ? acc
      : [...acc, curr?.jobRole];
  }, []);

  // Function to get all unique locations from the jobs data
  const getAllLocations = jobs?.reduce((acc, curr) => {
    return acc?.some((item) => item === curr?.location)
      ? acc
      : [...acc, curr?.location];
  }, []);

  // Event handler for role filter change
  const handleRoleChange = (event) => {
    dispatch(setRoleFilter(event.target.value));
  };

  // Event handler for employee count filter change
  const handleEmployeeCountChange = (event) => {
    dispatch(setEmployeeCountFilter(event.target.value));
  };

  // Event handler for experience filter change
  const handleExperienceChange = (event) => {
    dispatch(setExperienceFilter(event.target.value));
  };

  // Event handler for location filter change
  const handleLocationChange = (event) => {
    dispatch(setLocationFilter(event.target.value));
  };

  // Event handler for salary filter change
  const handleSalaryChange = (event) => {
    dispatch(setSalaryFilter(event.target.value));
  };

  // Event handler for company name filter change
  const handleCompanyNameChange = (event) => {
    dispatch(setCompanyNameFilter(event.target.value));
  };

  // Rendering the FilterBar component
  return (
    <div className="filter-bar">
      {/* Dropdown for selecting job roles */}
      <FormControl sx={{ margin: "10px", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Roles</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedRole}
          label="Roles"
          onChange={handleRoleChange}
        >
          <MenuItem disabled value="">
            Select Role
          </MenuItem>
          {getAllRoles?.map((role) => {
            return (
              <MenuItem value={role} className="capitalize">
                {role}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* Dropdown for selecting employee count */}
      <FormControl sx={{ margin: "10px", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">
          Number of Employees
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedEmployeeCount}
          label="Number of Employees"
          onChange={handleEmployeeCountChange}
        >
          <MenuItem disabled value="">
            Select Number of Employees
          </MenuItem>
          <MenuItem value={10}>0 - 10</MenuItem>
          <MenuItem value={50}>10 - 50</MenuItem>
          <MenuItem value={100}>50 - 100</MenuItem>
          <MenuItem value={101}>100+</MenuItem>
        </Select>
      </FormControl>
      {/* Dropdown for selecting experience */}
      <FormControl sx={{ margin: "10px", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedExperience}
          label="Experience"
          onChange={handleExperienceChange}
        >
          <MenuItem disabled value="">
            Select Experience
          </MenuItem>
          <MenuItem value={0}>Fresher</MenuItem>
          <MenuItem value={1}>Upto 1 Year</MenuItem>
          <MenuItem value={2}>Upto 2 Year</MenuItem>
          <MenuItem value={3}>Upto 3 Years</MenuItem>
          <MenuItem value={4}>Upto 4 Years</MenuItem>
          <MenuItem value={5}>Upto 5 Years</MenuItem>
          <MenuItem value={6}>Upto 6 Years</MenuItem>
        </Select>
      </FormControl>
      {/* Dropdown for selecting location */}
      <FormControl sx={{ margin: "10px", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLocation}
          label="Location"
          onChange={handleLocationChange}
        >
          <MenuItem disabled value="">
            Select Location
          </MenuItem>
          {getAllLocations?.map((location) => {
            return (
              <MenuItem value={location} className="capitalize">
                {location}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* Dropdown for selecting minimum salary */}
      <FormControl sx={{ margin: "10px", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Minimum Salary</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSalary}
          label="Minimum Salary"
          onChange={handleSalaryChange}
        >
          <MenuItem disabled value="">
            Select Minimum Salary
          </MenuItem>
          <MenuItem value={10}>upto 10 LPA</MenuItem>
          <MenuItem value={20}>10 to 20 LPA</MenuItem>
          <MenuItem value={50}>20 to 50 LPA</MenuItem>
          <MenuItem value={51}>50+ LPA</MenuItem>
        </Select>
      </FormControl>
      {/* Text field for searching by company name */}
      <TextField
        sx={{ margin: "10px", width: "300px" }}
        id="outlined-basic"
        label="Search by Company Name"
        variant="outlined"
        value={selectedCompanyName}
        onChange={handleCompanyNameChange}
      />
    </div>
  );
};

// Exporting the FilterBar component
export default FilterBar;
