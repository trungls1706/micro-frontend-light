import React, { Suspense } from "react";

const Calc = React.lazy(() => import("calc/Calc"));
const Display = React.lazy(() => import("display/Display"));

export default function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading Calc...</div>}>
        <Calc />
      </Suspense>
      <Suspense fallback={<div>Loading Display...</div>}>
        <Display />
      </Suspense>
    </div>
  );
}
