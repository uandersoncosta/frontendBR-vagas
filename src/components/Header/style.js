import styled from "styled-components";
import { COLOR_SCHEME } from "../../constants/constants";

export const HeaderContainer = styled.div`
  height: 200px;
  background: ${COLOR_SCHEME.PRIMARY};
  background-image: url("images/header-bg.png");
  background-position-x: center;
  background-size: cover;
`;
