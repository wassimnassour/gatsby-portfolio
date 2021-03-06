import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";

import { Title } from "../../utilityStyle";
import { ProjectSectionContainer, ProjectWrapper } from "./project.style";
import { CustomButton } from "../../index";
import ProjectCard from "../projectCard/projectCard";
const Project = () => {
  const data = useStaticQuery(graphql`
    {
      githubData {
        data {
          user {
            repositories {
              edges {
                node {
                  id
                  forkCount
                  homepageUrl
                  description
                  name
                  primaryLanguage {
                    name
                  }
                  stargazers {
                    totalCount
                  }
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    githubData: {
      data: {
        user: {
          repositories: { edges },
        },
      },
    },
  } = data;
  return (
    <ProjectSectionContainer>
      <Title> Open Source Projects</Title>
      <Fade bottom>
        <ProjectWrapper>
          {edges.map(({ node }) => {
            return (
              <ProjectCard
                key={node.id}
                name={node.name}
                url={node.homepageUrl}
                githubUrl={node.url}
                stars={node.stargazers.totalCount}
                primaryLanguage={node.primaryLanguage.name}
                forkCount={node.forkCount}
                description={node.description}
              />
            );
          })}
          <div className="button">
            <CustomButton
            type="external"
              color="black"
              content="See more"
              url="https://github.com/wassimnassour"
            />
          </div>
        </ProjectWrapper>
      </Fade>
    </ProjectSectionContainer>
  );
};

export default Project;
