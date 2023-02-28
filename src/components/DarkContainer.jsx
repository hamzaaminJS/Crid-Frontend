import React, { useRef } from "react";

const DarkContainer = ({SubHeader, Header, Paragraph}) => {

  return (
    <div
      className="dark-container element"
    >
      <div className="inside-dark">
        <h1
          className="heading-one"
        >
          {Header}
        </h1>
        <div className="paragraph-dark">
            
        <h3 className="heading-three">{SubHeader}</h3>
          <p
            className="paragraph-two"
          >
            {Paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarkContainer;