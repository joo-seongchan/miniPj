/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card, CardBody, Button } from "reactstrap";
import "../../assets/scss/style.scss";

import img1 from "../../assets/images/portfolio/img1.jpg";
import img2 from "../../assets/images/portfolio/img2.jpg";
import img3 from "../../assets/images/portfolio/img3.jpg";
import img4 from "../../assets/images/portfolio/img4.jpg";
import img5 from "../../assets/images/portfolio/img5.jpg";
import img6 from "../../assets/images/portfolio/img6.jpg";
import { joinApi } from "../../api";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";

export const NoticeBoard = () => {
  const [db, setDb] = useState([]);
  useEffect(() => {
    const boardData = async () => {
      const {
        data: { results },
      } = await joinApi.get("/api/board");
      setDb(results);
    };
    boardData();
  }, []);

  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Our Recent work with three column</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Link style={{ position: "relative", right: "0" }} to="/">
            <Button>새 글</Button>
          </Link>
          <Row className="m-t-40">
            {db.map((db) => (
              <Col md="4" key={db.id}>
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <img
                      src={img1}
                      className="card-img-top"
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-0"></h5>
                    <p className="m-b-0 font-14">Digital Marketing</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};
