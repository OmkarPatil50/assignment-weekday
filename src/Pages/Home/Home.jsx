import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../Thunks/jobsThunk";
import JobCard from "../../Components/JobCard/JobCard";
import Spinner from "../../Components/Spinner/Spinner";
import "./Home.css";
import JobModal from "../../Components/Modal/Modal";
import FilterBar from "../../Components/FilterBar/FilterBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filteredJobs, page, loading } = useSelector((state) => state.jobs);
  const [openModal, setOpenModal] = useState({
    open: false,
    data: {},
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs(page));
  }, []);

  let fetchData = true;

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

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleOpenModal = (data) => {
    setOpenModal((prev) => ({ ...prev, open: true, data }));
  };

  return (
    <div>
      <JobModal
        open={openModal?.open}
        setOpen={setOpenModal}
        modalData={openModal?.data}
      />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${
          isOpen ? "margin-open" : "margin-close"
        } job-cards-section`}
      >
        <FilterBar />
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

export default Home;
