import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./FilterBar.css";
import { useSelector } from "react-redux";

const FilterBar = () => {
  const { jobs } = useSelector((state) => state.jobs);

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

  return (
    <div className="filter-bar">
      <FormControl sx={{ margin: "10px", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Roles</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Roles"
          onChange={() => {}}
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
          value=""
          label="Number of Employees"
          onChange={() => {}}
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
          value=""
          label="Experience"
          onChange={() => {}}
        >
          <MenuItem disabled value="">
            Select Experience
          </MenuItem>
          <MenuItem value={0}>Fresher</MenuItem>
          <MenuItem value={1}>0 to 1 Year</MenuItem>
          <MenuItem value={2}>1 to 2 Year</MenuItem>
          <MenuItem value={3}>2 + Years</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ margin: "10px", width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Location"
          onChange={() => {}}
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
        <InputLabel id="demo-simple-select-label">Salary</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Salary"
          onChange={() => {}}
        >
          <MenuItem disabled value="">
            Select Salary
          </MenuItem>
          <MenuItem value={10}>upto 10 LPA</MenuItem>
          <MenuItem value={20}>10 to 20 LPA</MenuItem>
          <MenuItem value={50}>20 to 50 LPA</MenuItem>
          <MenuItem value={50}>50+ LPA</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default FilterBar;
