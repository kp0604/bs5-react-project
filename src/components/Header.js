import React from "react";

export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="container-fluid justify-content-around">
        <h3 className="text-success m-0">ATG.WORLD</h3>
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
        <div className="d-flex align-items-center d-none d-md-block">
          <span>Create Account.</span>
          <div class="dropdown">
            <button
              class="btn btn-white dropdown-toggle ps-0"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="text-primary fw-bold">Its Free!</span>
            </button>
            <ul
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            ></ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
