import React, { Suspense } from "react";

const RemoteButton = React.lazy(() => import("remote/Button"));

export default function App() {
  return (
    <div>
      <h1>Host App (Vite)</h1>
      <Suspense fallback={<div>Loading remote button...</div>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}
