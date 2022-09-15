import React from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <>
      <Spline
        className="spline"
        scene="https://prod.spline.design/eTqerFPtxhA4RexT/scene.splinecode"
      />
      <div className="content">
        <h1>3D Shape Homepage</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor itaque
          temporibus officia doloremque qui perferendis, beatae id voluptate,
          minus debitis asperiores.
        </p>
      </div>
    </>
  );
}
