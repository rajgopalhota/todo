import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-5">
        <Card reference={ref}/>
        <Card reference={ref}/>
        <Card reference={ref}/>
        <Card reference={ref}/>
      </div>
    </>
  );
}

export default Foreground;
