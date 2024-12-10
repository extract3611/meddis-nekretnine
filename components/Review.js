import React, { useEffect } from "react";
 import { useState } from "react";

const TrustIndexComponent = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?9e7196b38d383553d946c5fd730";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setScriptLoaded(true);
      console.log("TrustIndex script loaded successfully");
    };

    script.onerror = () => {
      console.error("Error loading TrustIndex script");
    };

    // Append the script to the first element with the class "testimonial-section"
    const testimonialSection = document.querySelector(".testimonial-section");
    if (testimonialSection) {
      testimonialSection.appendChild(script);
    }

 
  }, []);

  return (
    <div style={{padding:"30px 30px"}} className="testimonial-section">
      <div className="title-1">
        <span className="label label-gradient">Recenzije</span><h2>Šta klijenti kažu o nama</h2><hr>
        </hr>
        </div>
       
      


      {scriptLoaded && (
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-businessunit-id="YOUR_BUSINESS_UNIT_ID" // Ensure you have your business unit ID here
        ></div>
      )}
    </div>
  );
};

export default TrustIndexComponent;
