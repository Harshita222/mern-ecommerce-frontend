import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h2>Privacy Policy</h2>
        <p>
    Your privacy is important to us. We collect personal information such as
    your name, email, and usage data to provide and enhance our services. This
    information is used strictly for improving your experience, responding to
    your queries, and sending relevant updates.
  </p>
  <p>
    We are committed to safeguarding your data with advanced security measures
    and do not sell or rent your personal information to third parties. If you
    have any questions or need assistance regarding your privacy, feel free to
    contact us at  www.help@ecommerceapp.com.
    </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;