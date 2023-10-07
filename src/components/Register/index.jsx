import React from "react";
import { Wrap, AntForm } from "./style";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/Auth";
import { message } from "antd";
import useRequest from "../../hooks/useRequest";

const Login = () => {
  const { request } = useRequest();
  const [, dispatch] = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await request({
        url: "user",
        method: "POST",
        body: values,
      })
        .then((res) => {
          if (res?.status === "fail") {
            message.error(res?.message);
          }
          if (res?.token) {
            dispatch({ type: "register", payload: res?.token });
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err, "ee");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrap>
      <Wrap.Container>
        <AntForm onFinish={handleSubmit} autoComplete="on">
          <Wrap.Title>Enter your Name</Wrap.Title>
          <AntForm.Item name="name" type="text">
            <Wrap.Input required />
          </AntForm.Item>

          <Wrap.Submit type="submit">
            <Wrap.LoginIcon /> Sign in
          </Wrap.Submit>
        </AntForm>
      </Wrap.Container>
    </Wrap>
  );
};

export default Login;
