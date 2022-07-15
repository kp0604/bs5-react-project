import React from "react";
import Cardscomp from "./Cardscomp";


export default function Home() {
  return (
    <>
      <section className="head h-50">
        <div
          className="container-md position-relative"
          style={{ top: "200px" }}
        >
          <h2 className="text-white fw-bold">Computer Engineering</h2>
          <h6 className="text-white">142,766 Computer Engineers follow this</h6>
        </div>
      </section>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8 col-xs-12">
            <Cardscomp />
            <Cardscomp />
            <Cardscomp />
          </div>
          <div className="col-lg-4 col-xs-0 d-lg-block d-none">
            <div className="container">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="dropdown mb-2">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Write a Post
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  ></ul>
                </div>
                <button type="button" className="btn btn-primary mb-2">
                  <i className="fa-solid fa-user-plus"></i> Join Group
                </button>
              </div>
              <div className="input-group mb-3 mt-5 border-2 border-bottom">
                <span
                  className="input-group-text border-0 bg-white"
                  id="basic-addon1"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Noida, India"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span
                  className="input-group-text border-0 bg-white"
                  id="basic-addon1"
                >
                  <i className="fa-solid fa-pen"></i>
                </span>
              </div>
              <div
                className="alert alert-light text-secondary fs-6"
                role="alert"
              >
                <i className="fa-solid fa-circle-exclamation me-1"></i> Your
                location will help us serve better and extend a personalised
                experience
              </div>
            </div>
          </div>
          <div
            className="position-fixed d-flex justify-content-end "
            style={{ bottom: "30px", right: "30px" }}
          >
            <button
              type="button"
              className="btn border-0 rounded-circle text-white p-3"
              style={{ backgroundColor: "crimson" }}
            >
              <i className="fa-solid fa-pen rounded-circle fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
