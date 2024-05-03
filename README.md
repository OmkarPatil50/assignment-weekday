# Candidate Application Platform

This project is my submission for the frontend interview assignment. The assignment is to create a candidate application platform that allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience.

## Technologies Used

- ReactJs
- Redux
- CSS (vanilla)
- Material UI

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/OmkarPatil50/assignment-weekday.git
```

2. Navigate to the project directory:

```bash
cd assignment-weekday
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

## Features

- **Job Cards:** Each job listing is displayed as a card containing the job title, company name, location, job description, experience required, and an apply button/link.
- **Filters:** Filters allow users to refine job listings based on minimum experience, company name, location, remote/on-site, tech stack, role, and minimum base pay.
- **Infinite Scroll:** Implemented infinite scroll to load additional job listings as the user scrolls down the page.
- **Responsive Design:** The platform is responsive and works well on different screen sizes, including mobile devices.

## API Integration

The project integrates with the provided API endpoint `https://api.weekday.technology/adhoc/getSampleJdJSON` to fetch job listings.
