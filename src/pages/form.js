import React from "react";
import Layout from "../components/layout.js";
import ContactForm from "../components/contactForm.js";

// markup
const FormPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <ContactForm />
      </Layout>
    </main>
  );
};

export default FormPage;
