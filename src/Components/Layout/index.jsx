import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";


export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <hr/>
        <div className="row mt-3">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-7">
            <Outlet />
            <Footer />
          </div>
          <div className="col-2">
            Ad Area
          </div>
        </div>
      </Container>
    </>
  );
};
