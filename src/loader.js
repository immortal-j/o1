import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader2 from "./components/O(1)Home/Loader2";
import CoderunLanding from "./components/coderunpage/crpage/landing";
import DjangoLanding from "./components/django_workshop/django_workshop/landing";
import CoreSubjectsLanding from "./components/event_pages/core_subjects/landing";
import PythonBootcampLanding from "./components/event_pages/python_bootcamp/landing";
import SDEBootcampLanding from "./components/event_pages/sde_bootcamp/landing";
import AptiSeriesLanding from "./components/event_pages/apti_series/landing";
import ComboCoursesLanding from "./components/event_pages/combo_courses/landing";

const Loginloader = lazy(() => import("./components/Coderun/Loginloader"));

function Loader() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Loader2 />
        </Route>
        <Route exact path="/coderun">
          <CoderunLanding />
        </Route>
        <Route exact path="/django">
          <DjangoLanding />
        </Route>
        <Route exact path="/core-subjects">
          <CoreSubjectsLanding />
        </Route>
        <Route exact path="/python-bootcamp">
          <PythonBootcampLanding />
        </Route>
        <Route exact path="/sde-bootcamp">
          <SDEBootcampLanding />
        </Route>
        <Route exact path="/aptitude">
          <AptiSeriesLanding />
        </Route>
        <Route exact path="/combo">
          <ComboCoursesLanding />
        </Route>
        <Suspense>
          <Loginloader />
        </Suspense>
      </Switch>
    </div>
  );
}

export default Loader;
