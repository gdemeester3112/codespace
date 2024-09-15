import React from "react";
import "../styles.css";

const educationData = [
  {
    institution: "University of California San Diego",
    degree: "Bachelor of Computer Engineering",
    years: "2022 - 2027",
  },
  {
    institution: "Mougins School",
    degree: "High School Diploma",
    years: "2016 - 2022",
  },
];

const Education = () => {
  return (
    <section className="education-section light" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-content">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <p>{item.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
