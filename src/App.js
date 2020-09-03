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
              <span className="effect">Memorable</span>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <p className="text-center"><div className="mystyle">Yo<span data-toggle="tooltip" title="Urva Patel" className="word">u</span> &amp; <span className="word" data-toggle="tooltip" title="Smit Patel / Umesh Prajapati">i</span> </div> are more than Friends. We're <div className="mystyle"> li<span className="word" data-toggel="tooltip" title="Kashyap Patel">k</span>e </div> a really Small gang.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
