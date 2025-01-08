import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">Welcome to Shopper'sHub! We're thrilled to have you here and introduce you to a world of endless possibilities in online shopping. At Shopper'sHub, we believe that shopping is more than just acquiring products – it's an experience, a journey, and a way to express yourself. We've crafted this platform with utmost care, blending innovation, convenience, and a touch of magic to create an online shopping destination like no other.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;