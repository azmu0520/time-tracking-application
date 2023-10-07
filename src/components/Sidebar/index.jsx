import React from "react";
import { Wrap } from "./style";
// import logo from '../../assets/images/logo.jpg';
import { data } from "../../utilits/navbar";
import { NavLink, Outlet } from "react-router-dom";
import Time from "../CurrentTime";
import { useAuthContext } from "../../context/Auth";
export default function Sidebar() {
  const [, dispatch] = useAuthContext();
  const logOut = () => {
    dispatch({ type: "logout" });
    window.location.reload();
  };
  return (
    <Wrap>
      <Wrap.Links>
        {data.map(({ id, title, path }) => (
          <NavLink key={id} to={path}>
            <Wrap.Link>{title}</Wrap.Link>
          </NavLink>
        ))}
        <Wrap.Link onClick={logOut}>Quit</Wrap.Link>
        <Time />
      </Wrap.Links>
      <Wrap.Outlet>
        <Outlet />
      </Wrap.Outlet>
    </Wrap>
  );
}
