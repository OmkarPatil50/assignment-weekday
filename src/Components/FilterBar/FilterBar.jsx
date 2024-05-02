import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setRoleFilter,
  setEmployeeCountFilter,
  setExperienceFilter,
  setLocationFilter,
  setSalaryFilter,
  setCompanyNameFilter
} from "../../Slices/jobSlice";

const FilterBar = () => {
  const {
    selectedSalary,
    selectedLocation,
    selectedExperience,
    selectedEmployeeCount,
    selectedRole,
    selectedCompanyName,
    jobs,
  } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();


  const getAllRoles = jobs?.reduce((acc, curr) => {
    return acc?.some((item) => item === curr?.jobRole)
      ? acc
      : [...acc, curr?.jobRole];
  }, []);

  const getAllLocations = jobs?.reduce((acc, curr) => {
    return acc?.some((item) => item === curr?.location)
      ? acc
      : [...acc, curr?.location];
  }, []);

  const handleRoleChange = (event) => {
    dispatch(setRoleFilter(event.target.value));
  };

  const handleEmployeeCountChange = (event) => {
    dispatch(setEmployeeCountFilter(event.target.value));
  };

  const handleExperienceChange = (event) => {
    dispatch(setExperienceFilter(event.target.value));
  };

  const handleLocationChange = (event) => {
    dispatch(setLocationFilter(event.target.value));
  };

  const handleSalaryChange = (event) => {
    dispatch(setSalaryFilter(event.target.value));
  };

  const handleCompanyNameChange = (event) => { 
    dispatch(setCompanyNameFilter(event.target.value)); 
  };
  return (
    <div className="filter-bar">
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
export default FilterBar;
