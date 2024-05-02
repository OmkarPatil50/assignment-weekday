import React from "react";
import "./JobCard.css";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";

const JobCard = ({ jobData, handleOpenModal, openModal }) => {
  const displayCompanyDetails = openModal
    ? jobData?.jobDetailsFromCompany
    : jobData?.jobDetailsFromCompany?.split("\n").slice(0, 7).join("\n");

  return (
    <div className="job-card">
      <p className="posting-date">
        <HourglassBottomOutlinedIcon /> Posted 3 days ago
      </p>
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
      <p className="job-salary">
        Estimated Salary : {jobData?.minJdSalary || "18"} -{" "}
        {jobData?.maxJdSalary || "20"} {jobData?.salaryCurrencyCode || "LPA"}
      </p>
      <section className="company-details-section">
        <p className="about-company-tag">About Company:</p>
        <p className="about-us-tag">About us</p>
        <p className={`company-details ${openModal ? "expanded" : ""}`}>
          {displayCompanyDetails}
          {!openModal && <span className="fade-effect"></span>}
        </p>
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
      <section className="min-experience-section">
        <h3 className="min-experience-heading">Minimum Experience</h3>
        <p>{jobData?.minExp || "2"} Years</p>
      </section>
      <section className="job-card-btn-section flex-col">
        <button className="btn-easy-apply flex-center">⚡ Easy Apply</button>
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

export default JobCard;
