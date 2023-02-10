import React from "react";
import JobPost from "../JobPost";
import { JobListingContainer } from "./style";

export default function Jobs({ issues, handleOpenNewTransactionModal }) {
  return (
    <JobListingContainer>
      {issues.map((issue) => (
        <JobPost
          key={issue}
          issue={issue}
          handleOpenNewTransactionModal={handleOpenNewTransactionModal}
        />
      ))}
    </JobListingContainer>
  );
}
