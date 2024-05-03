// Importing necessary dependencies and styles
import React from "react";
import "./JobCard.css";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";

// Defining the JobCard component
const JobCard = ({ jobData, handleOpenModal, openModal }) => {
  // Function to display company details either truncated or expanded based on the openModal state
  const displayCompanyDetails = openModal
    ? jobData?.jobDetailsFromCompany
    : jobData?.jobDetailsFromCompany?.split("\n").slice(0, 7).join("\n");

  // Rendering the JobCard component
  return (
    <div className="job-card">
      {/* Displaying posting date */}
      <p className="posting-date">
        <HourglassBottomOutlinedIcon /> Posted 3 days ago
      </p>
      {/* Header section containing company logo, name, job role, and location */}
      <section className="job-card-header">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVxS4X0s8i-LRc7oeUVcDUsG68Sq2iyxENtDTQAqX2Q&s"
            alt="company_logo"
            className="company-logo"
          />
        </div>
        <div>
          <h3 className="company-name">Fitstok</h3>
          <p className="capitalize">{jobData?.jobRole}</p>
          <p className="capitalize job-location">{jobData?.location}</p>
        </div>
      </section>
      {/* Displaying estimated salary */}
      <p className="job-salary">
        Estimated Salary : {jobData?.minJdSalary || "18"} -{" "}
        {jobData?.maxJdSalary || "20"} {jobData?.salaryCurrencyCode || "LPA"}
      </p>
      {/* Section containing company details */}
      <section className="company-details-section">
        <p className="about-company-tag">About Company:</p>
        <p className="about-us-tag">About us</p>
        {/* Displaying company details with expansion option */}
        <p className={`company-details ${openModal ? "expanded" : ""}`}>
          {displayCompanyDetails}
          {!openModal && <span className="fade-effect"></span>}
        </p>
        {/* Button to view more company details */}
        {!openModal && (
          <div className="flex-center view-more-btn-section">
            <button
              className="view-more-btn"
              onClick={() => handleOpenModal(jobData?.jobDetailsFromCompany)}
            >
              View Job
            </button>
          </div>
        )}
      </section>
      {/* Section displaying minimum required experience */}
      <section className="min-experience-section">
        <h3 className="min-experience-heading">Minimum Experience</h3>
        <p>{jobData?.minExp || "2"} Years</p>
      </section>
      {/* Section containing action buttons */}
      <section className="job-card-btn-section flex-col">
        {/* Button for easy application */}
        <button className="btn-easy-apply flex-center">⚡ Easy Apply</button>
        {/* Button to unlock referral asks */}
        <button className="flex-center btn-referral">
          <div>
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1714550061~exp=1714553661~hmac=7300aa8b06d2c23a94a0df5c5419548b2ed6379d1adeea8b45190308e070e211&w=1060"
              alt="user_one"
              className="disabled-user"
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1714551707~exp=1714555307~hmac=1cf75886895a9db7e3585f1b7e48af099bf3ccf243cb1624851cd572564754a9&w=1060"
              alt="user_one"
              className="disabled-user"
            />
          </div>
          Unlock referral asks
        </button>
      </section>
    </div>
  );
};

// Exporting the JobCard component
export default JobCard;
