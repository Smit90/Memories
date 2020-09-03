import React from "react";
import Pics from './Pics';

function App() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row ">
          <div className="col-12 mx-auto">
            <p className="">
              Best moments with friends
              <span>Memorable</span>
              &mdash; unforgettable &mdash;
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-2">
        <div className="row">
          <div className="col-12 mx-auto">
            <p className="hovereffect">Friends &amp; Brothers</p>
          </div>
        </div>
      </div>
      <Pics />
    </>
  );
}

export default App;
