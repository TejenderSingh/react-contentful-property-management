import styled from "styled-components";
import defaultBg from "../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: ${props => (props.height ? props.height : `80vh`)};
  background: url(${props => (props.img ? props.img : defaultBg)}) center/cover
    no-repeat;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

export default StyledHero;
