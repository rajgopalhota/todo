import React from "react";

export default function Background() {
  return (
    <>
      <div className="fixed z-[1] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
          ToDo Nav
        </div>
        <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
          To-Do.
        </h1>
      </div>
    </>
  );
}
