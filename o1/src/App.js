import React from "react";
import { Suspense, lazy } from "react";

import Preload from "./preload";
import "./App.css";
const Loader = lazy(() => import("./loader"));
function App() {
  return (
    <Suspense fallback={<Preload />}>
      <div className="app">
        <Loader />
      </div>
    </Suspense>
  );
}

export default App;
