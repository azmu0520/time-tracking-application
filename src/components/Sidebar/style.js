import styled from "styled-components";
export const Wrap = styled.div`
  display: flex;
  height: 100vh;
`;

Wrap.Links = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  padding: 0.35rem 1rem 0.3rem 1.64rem;

  .logo {
    height: 70px;
    background: transparent;
    box-shadow: none;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 0.5rem;
    color: #565656;
  }
  .active {
    background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7));
    box-shadow: 0 0 10px 1px rgba(115, 103, 240, 0.7);
    border-radius: 4px;
    color: #fff !important;
  }
`;

Wrap.Link = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
`;

Wrap.Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

Wrap.Outlet = styled.div`
  flex: 5;
  padding: calc(2.2rem - 0.4rem) 2.2rem 0;
  background-color: #f4f4f4;
`;
