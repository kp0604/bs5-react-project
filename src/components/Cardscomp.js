import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import '../App.css'
// import p1 from "../imgs/p1.jpg";
// import mav from "../imgs/mav.png";

export default function Cardscomp({ card }) {
  return (
    <div className="card my-4">
      <img
        src={card.bg}
        className="card-img-top"
        style={{ height: "10rem" }}
        alt="img"
      />
      <div className="card-body">
        <h5 className="my-4">
          <i class={card.topicAv}></i> {card.topic}
        </h5>
        <div class="d-flex justify-content-between">
          <h5 className="card-title">{card.title}</h5>
          <Dropdown variant="white">
            <Dropdown.Toggle variant="light" id="dropdown-autoclose-true">
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Edit</Dropdown.Item>
              <Dropdown.Item >Report</Dropdown.Item>
              <Dropdown.Item >Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {card.des ? (
          <p className="card-text">{card.des}</p>
        ) : (
          <button class="btn btn-light border border-1 w-100 mt-2">
            visit website
          </button>
        )}
        <div className="d-flex align-items-center mt-4">
          <img
            src={card.av}
            className="card-img-top d-block"
            style={{ height: "4rem", width: "4rem" }}
            alt="img"
          />
          <div className="d-flex  align-items-center justify-content-between flex-grow-1 flex-wrap">
            <h5 className="card-title ms-4">{card.name}</h5>
            <h5 className="me-5">
              <span class="badge text-secondary">1.4k views</span>
            </h5>
          </div>
          {/* <div className="d-flex align-items-center"> */}
          <button
            className="btn btn-sm"
            style={{ backgroundColor: "lightgray" }}
          >
            <i class="fa-solid fa-share-nodes"></i> Share
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
