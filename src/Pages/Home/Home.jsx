// Importing necessary dependencies and styles
import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../Thunks/jobsThunk";
import JobCard from "../../Components/JobCard/JobCard";
import Spinner from "../../Components/Spinner/Spinner";
import "./Home.css";
import JobModal from "../../Components/Modal/Modal";
import FilterBar from "../../Components/FilterBar/FilterBar";

// Defining the Home component
const Home = () => {
  // State for managing sidebar open/close
  const [isOpen, setIsOpen] = useState(false);
  // Redux store selectors
  const { selectedRole, filteredJobs, page, loading } = useSelector(
    (state) => state.jobs
  );
  // State for managing job modal open/close and data
  const [openModal, setOpenModal] = useState({
    open: false,
    data: {},
  });

  const dispatch = useDispatch();

  // Fetching initial job data on component mount
  useEffect(() => {
    dispatch(getAllJobs(page));
  }, []);

  // Flag to control fetching data to prevent multiple requests during infinite scroll
  let fetchData = true;

  // Function to handle infinite scroll
  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        if (fetchData) {
          fetchData = false;
          dispatch(getAllJobs(page)).then(() => {
            fetchData = true;
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Adding event listener for infinite scroll on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  // Function to handle opening job modal
  const handleOpenModal = (data) => {
    setOpenModal((prev) => ({ ...prev, open: true, data }));
  };

  // Rendering the Home component
  return (
    <div>
      {/* Job modal component */}
      <JobModal
        open={openModal?.open}
        setOpen={setOpenModal}
        modalData={openModal?.data}
      />
      {/* Sidebar component */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${
          isOpen ? "margin-open" : "margin-close"
        } job-cards-section`}
      >
        {/* Filter bar component */}
        <FilterBar />
        {/* Job cards grid container */}
        <div className="grid-container">
          {filteredJobs?.map((job, index) => {
            return (
              <JobCard
                key={index}
                jobData={job}
                handleOpenModal={handleOpenModal}
                openModal={openModal?.open}
              />
            );
          })}
        </div>
        {/* Spinner component while loading */}
        {loading ? (
          <div className="spinner-home flex-center">
            <Spinner />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// Exporting the Home component
export default Home;
