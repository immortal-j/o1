import "../crlan.css";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./navbar";
import RegisterSteps from "../registerSteps";
import Footer from "../Footer";
import Webinar from "../webinar";
import Combo from "../combo";

const useStyles = makeStyles((theme) => ({}));

function ComboCoursesLanding() {
  const classes = useStyles();
  return (
    <div>
      <div className="navsection">
        <Navbar />
      </div>

      <Combo />

      <hr />

      <section className="section6" id="register" style={{ marginTop: "-5%" }}>
        <p style={{ fontSize: "60px", fontWeight: "800" }}>How to Register?</p>
        <RegisterSteps
          googleForm={
            "https://docs.google.com/forms/d/e/1FAIpQLSdE25NO5_8cmGUXDcV82kfZMzUgf1E0hf7qkeGdmR8HinwAsg/viewform?usp=sf_link"
          }
        />
      </section>

      <hr />

      <section className="section6" style={{ marginTop: "-5%" }}>
        <p style={{ fontSize: "60px", fontWeight: "800" }}>
          Still have doubts?
        </p>
        <Webinar />
      </section>

      <hr />

      <Footer />
    </div>
  );
}

export default ComboCoursesLanding;
