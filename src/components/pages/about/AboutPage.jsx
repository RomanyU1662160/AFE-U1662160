import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="container-fluid header">
        <h3 className="fading "> The Premier League Info </h3>
        <div className="alert text-info font-weight-bold  animateToUp ">
          The application provides information about the teams playing in the
          Premier League (EPL)
        </div>

        <div className="alert text-info   animateToDown">
          <p className="text-info font-weight-bold">
            Users can use the filter search functionality to find a team and
            view it's details .
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
