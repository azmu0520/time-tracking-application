import React from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Wrap } from "./style.js";
import { message } from "antd";
import useRequest from "../../hooks/useRequest.js";

const formSchema = Yup.object().shape({
  title: Yup.string().required("Title Required"),
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
              created_by: localStorage.getItem("token"),
            }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Wrap.FormGroup className="my-3">
                  <label htmlFor="title">Project Title</label>
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
