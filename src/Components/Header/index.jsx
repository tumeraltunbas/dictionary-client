import React from "react";
import { Button, Col, Row } from "react-bootstrap";

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
                <Button className="m-1" children={<a href="#" className="text-light text-decoration-none">Sign Up</a>}/>
                <Button className="m-1" children={<a href="#" className="text-light text-decoration-none">Sign In</a>}/>
            </div>
        </Col>
      </Row>
    </div>
  );
};
