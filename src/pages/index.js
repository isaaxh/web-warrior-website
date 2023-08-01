import * as React from "react";
import Layout from "../components/Layout";
import * as style from "../styles/home.module.css";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const image = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <section className={style.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in KSA</p>
          <Link className={style.btn} to='/projects'>
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={image} alt='hero image from cms' />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
