import React, { useState } from "react";
import Cardscomp from "./Cardscomp";
import { Modal, Button } from "react-bootstrap";
import { cardsdata } from "../helpers/cardsdata";
import a5 from "../imgs/a5.png";
import a6 from "../imgs/a6.png";
import a7 from "../imgs/a7.png";
import a8 from "../imgs/a8.png";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div class="w-100">
              <ul class="nav nav-tabs">
                <li class="nav-item mb-2">
                  <span class="nav-link text-dark">All Posts</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link text-dark">Article</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link text-dark">Event</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link text-dark">Education</span>
                </li>
              </ul>
            </div>
            <div>
              {cardsdata.map((card) => {
                return <Cardscomp card={card} />;
              })}
            </div>
          </div>
          <div className="col-lg-4 col-xs-0 d-lg-block d-none">
            <div className="container">
              <div className="d-flex justify-content-evenly flex-wrap">
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
              <div class="d-none d-lg-block">
                <h5>
                  <i class="fa-solid fa-thumbs-up"></i> Recommended Groups
                </h5>
                <div class="vstack gap-4 mt-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <img
                        src={a5}
                        className="card-img-top d-block me-4"
                        style={{ height: "45px", width: "45px" }}
                        alt="img"
                      />
                      <h6>Leisure</h6>
                    </div>
                    <button class="btn py-0 px-3 btn-secondary rounded-pill">
                      Follow
                    </button>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <img
                        src={a6}
                        className="card-img-top d-block me-4"
                        style={{ height: "45px", width: "45px" }}
                        alt="img"
                      />
                      <h6>Activism</h6>
                    </div>
                    <button class="btn py-0 px-3 btn-secondary rounded-pill">
                      Follow
                    </button>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <img
                        src={a7}
                        className="card-img-top d-block me-4"
                        style={{ height: "45px", width: "45px" }}
                        alt="img"
                      />
                      <h6>MBA</h6>
                    </div>
                    <button class="btn py-0 px-3 btn-secondary rounded-pill">
                      Follow
                    </button>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <img
                        src={a8}
                        className="card-img-top d-block me-4"
                        style={{ height: "45px", width: "45px" }}
                        alt="img"
                      />
                      <h6>Philosphy</h6>
                    </div>
                    <button class="btn py-0 px-3 btn-secondary rounded-pill">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="position-fixed d-flex justify-content-end d-lg-none"
            style={{ bottom: "30px", right: "30px" }}
          >
            <button
              type="button"
              className="btn border-0 rounded-circle text-white p-3"
              style={{ backgroundColor: "crimson" }}
              onClick={handleShow}
            >
              <i className="fa-solid fa-pen rounded-circle fs-5"></i>
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Lorem Ipsum</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="container">
                  <div className="d-flex justify-content-evenly flex-wrap">
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
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Done
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
