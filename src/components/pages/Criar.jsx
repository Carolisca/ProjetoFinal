import React from "react";
import youtube from "../../images/youtube-day.svg";
import instagram from "../../images/instagram-day.svg";
import linkedin from "../../images/linkedin-day.svg";
import logologin from "../../images/logo-techtravels_v.2.png";

import { Link } from "react-router-dom";

export default function Criar() {
  return (
    <>
      <main className="container espaco">
        <form className="register-form">
          <div className="logo">
            <img
              width="180"
              height="150"
              src={logologin}
              className="fluid-img mt-4"
              alt="logo da techtravels"
            />
          </div>
          <div className="login-page form-floating">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="name"
            />
            <label for="floatingInput">Nome</label>
          </div>
          <div className="login-page form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">E-mail</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Senha</label>
          </div>
          <div>
            <Link to="/kanban">
              <button
                className="text-decoration-none btn btn-outline-secondary btn-lg px-4"
                type="submit"
              >
                Entrar
              </button>
            </Link>
          </div>
        </form>
      </main>
      <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top mt-auto">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; TechTravels 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.youtube.com/channel/UCbFZv9G9pN7SPaCNOOR7KnQ"
            >
              <img src={youtube} height="30" width="50" alt="YouTube" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com/somostera/"
            >
              <img src={instagram} height="30" width="50" alt="Instagram" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.linkedin.com/school/somostera/"
            >
              <img src={linkedin} height="30" width="50" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
