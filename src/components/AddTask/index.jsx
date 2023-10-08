import React from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import { Wrap } from "../AddProject/style";
import { message } from "antd";
import useRequest from "../../hooks/useRequest";

const formSchema = Yup.object().shape({
  title: Yup.string().required("Title Required"),
  sub_title: Yup.string().required("Subtitle Required"),
  project_id: Yup.string().required("Choose Course"),
  time: Yup.string().required("Set a Time"),
});

export default function AddTask() {
  const [projects, setProjects] = useState([]);
  const { request } = useRequest();
  useEffect(() => {
    request({
      url: "projects",
    })
      .then((res) => {
        if (res?.data) {
          setProjects(res.data);
        } else {
          message.error("Couldn't get Projects");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { project_id, sub_title, title, hours, minutes, seconds } = values;
    try {
      await request({
        url: "tasks",
        method: "POST",
        body: {
          project_id,
          sub_title,
          title,
          time: hours * 3600 + minutes * 60 + seconds,
        },
      }).then((res) => {
        if (res) {
          message.success("Task created");
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
          <div> Add Lessons</div>
        </Wrap.Header>
        <Wrap.CardBody>
          <Formik
            initialValues={{
              project_id: "",
              sub_title: "",
              title: "",
              time: 0,
              hours: "",
              minutes: "",
              seconds: "",
            }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              setFieldValue,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Wrap.FormGroup className="my-3">
                  <label htmlFor="module_id">Select Project</label>
                  <Field
                    as="select"
                    name="project_id"
                    required
                    id="project_id"
                    className={`form-control ${
                      errors.project_id && touched.project_id && "is-invalid"
                    }`}
                    onChange={(v) => {
                      setFieldValue("project_id", v?.target?.value);
                    }}
                  >
                    <option value="">Select Project</option>

                    {projects?.map((option, i) => (
                      <option key={i} value={option?._id}>
                        {option?.title}
                      </option>
                    ))}
                  </Field>
                  {errors.project_id && touched.project_id ? (
                    <div className="invalid-tooltip mt-25">
                      {errors.project_id}
                    </div>
                  ) : null}
                </Wrap.FormGroup>
                <Wrap.FormGroup className="my-3">
                  <label htmlFor="title">Task Title</label>
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
                  <label htmlFor="sub_title">Task Subtitle</label>
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

                <Wrap.FormGroup className="my-3">
                  <label htmlFor="hours">Task Given Time</label>
                  <div style={{ display: "flex" }}>
                    <Field
                      type="number"
                      name="hours"
                      required
                      id="hours"
                      placeholder="hours"
                    />
                    <Field
                      type="number"
                      name="minutes"
                      required
                      id="minutes"
                      placeholder="minutes"
                    />
                    <Field
                      type="number"
                      name="seconds"
                      required
                      id="seconds"
                      placeholder="seconds"
                    />
                  </div>
                </Wrap.FormGroup>

                <button
                  className="btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Wrap.CardBody>
      </Wrap.Card>
    </Wrap>
  );
}
