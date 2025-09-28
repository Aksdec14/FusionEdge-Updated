import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main
      className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #5D1F73, #1ABC9C, #F7F8A8)",
      }}
    >
      <div className="text-center">
        {/* 404 Code */}
        <p className="text-base font-semibold text-[#1ABC9C]">404</p>

        {/* Heading */}
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl drop-shadow-lg">
          Page not found
        </h1>

        {/* Message */}
        <p className="mt-6 text-lg text-gray-100 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-300"
            style={{
              background: "linear-gradient(90deg, #5D1F73, #1ABC9C)",
            }}
          >
            Go back home
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-white hover:text-[#F7F8A8] transition"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
