import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./EntrySidebarCard.css";

export const EntrySidebarCard = () => {
  return (

    <Row className='align-items-center hover'>
        <Col className='col-sm-10'>
            <p style={{fontSize: "0.9rem"}} className='text-dark'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, modi.
            </p>
        </Col>
        <Col className='col-sm-2'>
            <p className='text-dark'>123</p>
        </Col>
    </Row>

    )
}
