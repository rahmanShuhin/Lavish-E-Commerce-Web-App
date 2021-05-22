import React from "react";
import landing from "../../Images/landing-img.png";
import landing_1 from "../../Images/landing-img-1.png";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div>
        <div className="landingPage__left">
          <div>
            <h2>PREMIUM COMFORT.</h2>
            <p>
              Get ready for the season ahead with extra-special occasion styles
              from smart suits to print dresses
            </p>
          </div>
        </div>
        <div className="landingPage__right">
          {/* <img src={landing} alt="" />
          <img src={landing_1} alt="" /> */}
          <img
            src="https://www.next.co.uk/nxtcms/resource/blob/4126118/5f49c7faff03844a3aa030e7546ba7b4/suits-data.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
