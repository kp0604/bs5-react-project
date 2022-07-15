import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import mill from '../imgs/mill.png';
import logo from '../imgs/logo.png';

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="container-fluid justify-content-around">
      <img src={logo} alt="logo"/>
        <form className="d-flex w-25 d-none d-md-block">
          <div class="input-group rounded-pill">
            <span
              class="input-group-text bg-light border-end-0 rounded-end rounded-pill"
              id="basic-addon1"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              class="form-control bg-light border-start-0 rounded-start rounded-pill"
              placeholder="Search for your favourite groups in ATG"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
        <div className="d-md-flex align-items-center d-none">
          <span>Create Account.</span>
          <div>
            <button
              class="btn btn-white dropdown-toggle ps-0"
              type="button"
              id="dropdownMenuButton1"
              onClick={handleShow}
            >
              <span className="text-primary fw-bold">Its Free!</span>
            </button>
            <Modal size="lg" show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
              <div class="d-flex">
              <div>
                <div class="alert alert-success mb-2 p-1" role="alert">
                  lets learn, share and inspire eachtother...
                </div>
                <div>
                  <h3 class="my-3">Create Account</h3>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light"
                      placeholder="Firstname"
                    />
                    <input
                      type="text"
                      class="form-control bg-light"
                      placeholder="Lastname"
                    />
                  </div>
                  <input
                    type="text"
                    class="form-control bg-light rounded-0"
                    placeholder="Email"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="text"
                    class="form-control bg-light rounded-0"
                    placeholder="Password"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="text"
                    class="form-control bg-light"
                    placeholder="Confirm Password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center mt-4">
                <button
                  class="btn btn-primary rounded-pill w-md-100 w-50"
                  onClick={handleClose}
                >
                  create account
                </button>
                <span class="d-xs-block d-md-none text-primary fw-bold">or SignIn</span>
                </div>
                <button
                  class="btn btn-light border border-1 w-100 mt-4"
                  onClick={handleClose}
                >
                  <i class="fa-brands fa-facebook me-2"></i>Signup with Facebook
                </button>
                <button
                  class="btn btn-light border border-1 w-100 mt-2"
                  onClick={handleClose}
                >
                  <i class="fa-brands fa-google me-2"></i>Signup with Google
                </button>
                <p class="px-2 mt-4 d-xs-block d-md-none">By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
              <div class="d-none d-md-block">
              <p class="text-end">Already have an account? <span class="text-primary fw-bold">Sign In</span></p>
              <img src={mill} alt="bg" style={{height:"350px", width:"400px"}}/>
              <p class="px-2">By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
              </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </nav>
  );
}
