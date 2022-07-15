import React from "react";
import p1 from "../imgs/p1.jpg";
import mav from "../imgs/mav.png";

export default function Cardscomp() {
  return (
    <div className="card my-4">
      <img
        src={p1}
        className="card-img-top"
        style={{ height: "10rem" }}
        alt="img"
      />
      <div className="card-body">
      <h5 className="my-4"><i class="fa-solid fa-pen-nib"></i> Article</h5>
        <h5 className="card-title">What if Famous brands had regular Fonts?</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex align-items-center">
            <img
              src={mav}
              className="card-img-top d-block"
              style={{ height: "4rem", width: "4rem" }}
              alt="img"
            />
          <div className="d-flex  align-items-center justify-content-between flex-grow-1 flex-wrap">
            <h5 className="card-title ms-2">Card title</h5>
          <h5 className="me-5"><span class="badge text-secondary">1.4k views</span></h5>
          </div>
          {/* <div className="d-flex align-items-center"> */}
            <button className="btn btn-sm" style={{backgroundColor:"lightgray",}}>
              <i class="fa-solid fa-share-nodes"></i> Share
            </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
