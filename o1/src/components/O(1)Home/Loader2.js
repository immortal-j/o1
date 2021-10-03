import React from "react";
import { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Preload from "../../preload";
const Pata = lazy(() => import("./patta/patta"));
const Fade = lazy(() => import("react-reveal/Fade"));
const Alumni = lazy(() => import("./Alumnis/alumni"));
const OurEvents = lazy(() => import("./Events/OurEvents"));
const Placedat = lazy(() => import("./Placedat"));
const Footer = lazy(() => import("./Footer"));

function Loader() {
  return (
    <div>
      <ScrollUpButton style={{ backgroundColor: "" }} />
      <Navbar />
      <Landing />
      <Fade>
        <Suspense fallback={<Preload />}>
          <Pata />
        </Suspense>
      </Fade>
      <Fade>
        <Suspense fallback={<Preload />}>
          <Placedat />
        </Suspense>
      </Fade>
      <Fade left>
        <Suspense fallback={<Preload />}>
          <OurEvents />
        </Suspense>
      </Fade>
      <Fade right>
        <Suspense fallback={<Preload />}>
          <Alumni />
        </Suspense>
      </Fade>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
export default Loader;
