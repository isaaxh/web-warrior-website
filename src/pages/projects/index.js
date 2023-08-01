import React from "react";
import Layout from "../../components/Layout";
import * as style from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Projects = ({ data }) => {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={style.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and websites I have created</h3>
        <div className={style.projects}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt={`image of ${project.frontmatter.title}`}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>
          Like what you see? Let's talk <a href='#'>{contact}</a>
        </p>
      </div>
    </Layout>
  );
};

export default Projects;

// export page query

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
