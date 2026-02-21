import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen flex items-center justify-center bg-[#f4f1ee] px-6">
    <div className="text-center max-w-lg">
      <h1 className="text-4xl font-poppins font-bold text-[#252926] mb-4">Page not found</h1>
      <p className="text-gray-700 mb-8 font-roboto">
        The page you requested is unavailable. Use the link below to return to DK Construction & Interior.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#CDB7A7] text-[#252926] font-semibold px-6 py-3 rounded hover:bg-[#bfa892]"
      >
        Back to home
      </Link>
    </div>
  </main>
);

export default NotFound;
