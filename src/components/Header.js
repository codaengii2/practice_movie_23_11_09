import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const Wrap = styled.div``;
const Logo = styled.div``;
const Menu = styled.div``;

export const Header = () => {
  return (
    <Wrap>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.detail}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>search</Link>
        </li>
      </Menu>
    </Wrap>
  );
};
