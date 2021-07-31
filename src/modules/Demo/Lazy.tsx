import React, { lazy, Suspense } from "react";

// import OtherComponent from './hook';

const OtherComponent = lazy(() => import("./hook"));

export default function Slot() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <OtherComponent></OtherComponent>
      </Suspense>
    </div>
  );
}
