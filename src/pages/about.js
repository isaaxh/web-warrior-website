import React from "react";
import Layout from "../components/Layout";
import * as style from "../styles/home.module.css";

const About = () => {
  return (
    <Layout>
      <div>
        <h1 style={{ fontSize: "4em" }}>About</h1>
        <p style={{ fontSize: 18, lineHeight: 1.5 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur, impedit asperiores eveniet ex fugit iste natus aperiam
          placeat blanditiis perspiciatis molestiae velit dignissimos
          repudiandae sit corrupti, soluta vitae obcaecati.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.5 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur, impedit asperiores eveniet ex fugit iste natus aperiam
          placeat blanditiis perspiciatis molestiae velit dignissimos
          repudiandae sit corrupti, soluta vitae obcaecati.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.5 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur, impedit asperiores eveniet ex fugit iste natus aperiam
          placeat blanditiis perspiciatis molestiae velit dignissimos
          repudiandae sit corrupti, soluta vitae obcaecati.
        </p>
      </div>
    </Layout>
  );
};

export default About;
