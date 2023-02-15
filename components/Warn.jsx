import React from "react";

function Warn() {
  return (
    <div
      class="bg-red-100 border sticky bottom-0 border-red-400 text-red-700 px-4 py-3 rounded "
      role="alert"
    >
      <strong class="font-bold">Holy smokes: </strong>
      <span class="block sm:inline">
        This Portfolio website under process, Thanks for visiting
      </span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" />
    </div>
  );
}

export default Warn;
