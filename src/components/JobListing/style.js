import styled from "styled-components";
import { COLOR_SCHEME, MEDIA_QUERY } from "../../constants/constants";

export const JobListingContainer = styled.div`
  padding: 3em 1em;
  background: ${COLOR_SCHEME.SECONDARY};
  @media (min-width: ${MEDIA_QUERY.MIN_WIDTH}) {
    padding: 3em;
  }
`;
