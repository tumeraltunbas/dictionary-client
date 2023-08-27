import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="pt-2 sticky-top bg-white">
      <Row>
        <Col className="col-sm">
          <a href="" className="text-decoration-none text-primary fs-4 fw-bold">
            Dictionary
          </a>
        </Col>
        <Col className="col-sm">
          <form action="">
            <div className="input-group">
              <input type="text" className="form-control shadow-none rounded" />
              <div className="input-group-append">
                <Button type="submit" children="Search"/>
              </div>
            </div>
          </form>
        </Col>
        <Col className="col-sm text-end">
            <div>
                <Button style={{margin: "2px"}} children="Sign Up"/>
                <Button className="p-1" children="Sign In"/>
            </div>
        </Col>
      </Row>
    </div>
  );
};
