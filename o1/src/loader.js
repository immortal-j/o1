import React, { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader2 from "./components/O(1)Home/Loader2";
import CoderunLanding from "./components/coderunpage/crpage/landing";
import DjangoLanding from "./components/django_workshop/django_workshop/landing";
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
        <Route exact path="/django_workshop">
          <DjangoLanding />
        </Route>
        <Suspense>
          <Loginloader />
        </Suspense>
      </Switch>
    </div>
  );
}

export default Loader;
