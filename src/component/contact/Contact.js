import React from "react";
import { useForm } from "react-hook-form";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { joinApi } from "../../api";

export const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm({ mode: "onChange" });

  const submit = async () => {
    console.log(1);
    const { title, text } = getValues();
    console.log(title);
    const contents = {
      title: title,
      text: text,
    };
    const { data } = await joinApi.post(`/api/posting`, null, {
      params: contents,
    });
    console.log(
      await joinApi.post(`/api/posting`, null, {
        params: contents,
      })
    );
    if (data.code === -1) {
      setError("susernameResult", { message: "이미 가입된 이메일 입니다." });
    } else if (data.code === 1) {
    } else {
      console.log(data);
    }
  };
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Contact Form</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Quick Contact</h4>
                    <Form onSubmit={handleSubmit(submit)}>
                      <Row>
                        <Col lg="6" style={{ maxWidth: "100%", flex: "100%" }}>
                          <FormGroup className="m-t-15">
                            <Input
                              {...register("title", {
                                required: "Title은 필수 입니다.",
                                onChange() {
                                  clearErrors("titleResult");
                                },
                              })}
                              type="text"
                              placeholder="Title"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              {...register("text", {
                                onChange() {
                                  clearErrors("text");
                                },
                              })}
                              type="textarea"
                              name="text"
                              placeholder="message"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              SUBMIT <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div
                    style={{ height: "100%" }}
                    className="detail-box p-40 bg-info"
                  >
                    <h2 style={{ textAlign: "center" }} className="text-white">
                      img
                    </h2>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};
