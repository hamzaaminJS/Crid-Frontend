import React from 'react'

function BaseStyle() {
  return (
    <div className="base-style dark">
        <h1 className="heading-one">Heading One</h1>
        <h2 className="heading-two" style={{'margin-top': '1rem'}}>Heading Two</h2>
        <h3 className="heading-three" style={{'margin-top': '1rem'}}>Heading Three</h3>
        <p className="paragraph-one" style={{'margin-top': '1rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, obcaecati.</p>
        <p className="paragraph-two" style={{'margin-top': '1rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis ad quaerat aliquid cupiditate tempore dicta iste expedita culpa? Culpa ad harum ratione architecto quisquam nam reprehenderit minus maxime unde.</p>
        <div className="buttons" style={{'margin-right': '3rem', 'margin-top': '3rem'}}>
          <button className="main-button">
              Main Button
          </button>
          <button className="outline-button">
              Outline Button
          </button>
        </div>
    </div>
  )
}

export default BaseStyle