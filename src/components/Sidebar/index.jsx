import React from "react";
import { Wrap } from "./style";
// import logo from '../../assets/images/logo.jpg';
import { data } from "../../utilits/navbar";
import { NavLink, Outlet } from "react-router-dom";
import Time from "../CurrentTime";
export default function Sidebar() {
  return (
    <Wrap>
      <Wrap.Links>
        {data.map(({ id, title, path }) => (
          <NavLink key={id} to={path}>
            <Wrap.Link>{title}</Wrap.Link>
          </NavLink>
        ))}
        <Time />
      </Wrap.Links>
      <Wrap.Outlet>
        <Outlet />
      </Wrap.Outlet>
    </Wrap>
  );
}
