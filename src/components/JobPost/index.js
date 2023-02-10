import React from "react";
import {
  JobPostContainer,
  JobPostCompanyWrapper,
  JobPostImage,
  JobPostCenterWrapper,
  JobPostCompany,
  JobPostPosition,
  JobPostDetails,
  JobPostDetail,
  BulletPoint,
  HorizontalRule,
  JobPostFilterContainer,
  JobPostFilterButton,
} from "./style";

export default function JobPost({ issue, handleOpenNewTransactionModal }) {
  const data = new Date(issue.created_at);
  const dataFormatada = data.toLocaleString();

  return (
    <JobPostContainer>
      <JobPostImage imagePath={issue.user.avatar_url} />
      <JobPostCenterWrapper>
        <JobPostCompanyWrapper>
          <JobPostCompany>{issue.user.login}</JobPostCompany>
        </JobPostCompanyWrapper>
        <JobPostPosition onClick={() => handleOpenNewTransactionModal(issue)}>
          {issue.title}
        </JobPostPosition>
        <JobPostDetails>
          <JobPostDetail>{dataFormatada}</JobPostDetail>
          <BulletPoint>{"\u2022"}</BulletPoint>
          {issue.labels.map((label) =>
            label.name == "CLT" || label.name == "PJ" ? (
              <JobPostDetail key={label.name}>{label.name}</JobPostDetail>
            ) : null
          )}
          <BulletPoint>{"\u2022"}</BulletPoint>
          {issue.labels.map((label) =>
            label.color == "f9745c" ? (
              <JobPostDetail key={label.name}>{label.name}</JobPostDetail>
            ) : null
          )}
        </JobPostDetails>
        <HorizontalRule />
      </JobPostCenterWrapper>
      <JobPostFilterContainer>
        {issue.labels.map((label) =>
          label.name == "Júnior" ||
          label.name == "Pleno" ||
          label.name == "Sênior" ||
          label.name == "Especialista" ||
          label.name == "Estágio" ? (
            <JobPostFilterButton key={label.name}>
              {label.name}
            </JobPostFilterButton>
          ) : null
        )}
      </JobPostFilterContainer>
      <br></br>
    </JobPostContainer>
  );
}
