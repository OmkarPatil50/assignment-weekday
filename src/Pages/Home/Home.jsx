import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../Thunks/jobsThunk";
import JobCard from "../../Components/JobCard/JobCard";
import "./Home.css";
import JobModal from "../../Components/Modal/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { jobs, page } = useSelector((state) => state.jobs);
  const [openModal, setOpenModal] = useState({
    open: false,
    data: {},
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs(page));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      dispatch(getAllJobs(page));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, page]);

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
        <div className="grid-container">
          {jobs?.map((job, index) => {
            return (
              <JobCard
                jobData={job}
                handleOpenModal={handleOpenModal}
                openModal={openModal?.open}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
