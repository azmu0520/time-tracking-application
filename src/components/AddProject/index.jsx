import React from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Wrap } from "./style.js";
import { message } from "antd";
import useRequest from "../../hooks/useRequest.js";

const formSchema = Yup.object().shape({
  title: Yup.string().required("Title Required"),
  sub_title: Yup.string().required("Subtitle Required"),
});

const AddProject = () => {
  const { request } = useRequest();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await request({
        url: "projects",
        method: "POST",
        body: values,
      }).then((res) => {
        if (res) {
          message.success("Course created");
        } else {
          message.error("Something went wrong");
        }
      });
      resetForm();
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };
  return (
    <Wrap>
      <Wrap.Card>
        <Wrap.Header>
          <div> Add Project Details</div>
        </Wrap.Header>
        <Wrap.CardBody>
          <Formik
            initialValues={{
              title: "",
              sub_title: "",
            }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Wrap.FormGroup className="my-3">
                  <label for="title">Project Title</label>
                  <Field
                    type="text"
                    name="title"
                    required
                    id="title"
                    className={`form-control ${
                      errors.title && touched.title && "is-invalid"
                    }`}
                  />
                  {errors.title && touched.title ? (
                    <div className="invalid-tooltip mt-25">{errors.title}</div>
                  ) : null}
                </Wrap.FormGroup>
                <Wrap.FormGroup className="my-3">
                  <label for="sub_title">Project Subtitle</label>
                  <Field
                    type="text"
                    name="sub_title"
                    required
                    id="sub_title"
                    className={`form-control ${
                      errors.sub_title && touched.sub_title && "is-invalid"
                    }`}
                  />
                  {errors.sub_title && touched.sub_title ? (
                    <div className="invalid-tooltip mt-25">
                      {errors.sub_title}
                    </div>
                  ) : null}
                </Wrap.FormGroup>

                <button className="btn-primary" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Wrap.CardBody>
      </Wrap.Card>
    </Wrap>
  );
};

export default AddProject;
