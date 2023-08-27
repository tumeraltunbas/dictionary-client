import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { EntrySidebarCard } from "../EntrySidebarCard";

export const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 min-vh-100"
      style={{ width: "15vw" }}
    >
      <Nav className="nav-pills flex-column">
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <EntrySidebarCard />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
