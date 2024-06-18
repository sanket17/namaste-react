import React from "react";

export default function ContactUs() {
  return (
    <div>
      <h1 className="text-2xl m-4 p-4">ContactUs</h1>
      <input type="text" name="name" className="border border-black m-4" />
      <input type="text" name="lastname" className="border border-black m-4" />
      <button className="border border-black m-4 px-2">Submit</button>
    </div>
  );
}
