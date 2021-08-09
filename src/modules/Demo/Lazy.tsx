import React, { lazy, Suspense } from "react";

// import OtherComponent from './hook';
const OtherComponent = lazy(() => import("./hook"));

export default function Slot() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <OtherComponent />
    </Suspense>
  );
}
