import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import { data } from "../utilits/navbar";
import Register from "../components/Register";
import PrivateRoute from "./privateRoutes";
const Root = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />

      <Route element={<Sidebar />} key="1">
        {data?.map(({ id, path, Component }) => (
          <Route
            key={id}
            path={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        ))}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
