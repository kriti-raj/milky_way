import React from "react";
import Doodh from "../assets/doodh.jpg";
import Navbar from "./Navbar";

const Home = () => (
  <div className="bg-home-col min-h-screen">
    <Navbar title="HOME" />
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center pt-12">
        <img src={Doodh} className="border-8 border-red-500 rounded-lg" alt="Doodh" />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-12">
        <section className="min-h-[300px] rounded bg-grid-col shadow-xl sm:col-span-9">
          <h2 className="px-2 pt-2 text-2xl font-bold text-white">Rules:</h2>
          <div className="px-2 py-4 text-white">
            <p className="mb-4">1. The rate of milk as of March 2024 is ₹50.</p>
            <p className="mb-4">
              2. Duty of washing the utensil is divided equally in the order (Vikku {"->"} Immortal {"->"} Kriti).
            </p>
            <p className="mb-4">
              3. Payment to Vishal is done individually by all parties and it's upto their own agreement.
            </p>
            <p className="mb-2">4. Amount to be paid per litre :</p>
            <ul className="ml-8 list-disc">
              <li>Vikku: ₹14*</li>
              <li>Kriti: ₹18</li>
              <li>Immortal: ₹18</li>
            </ul>
            <p className="mt-2">*As Vikku receives lesser amount of milk so he pays less.</p>
          </div>
        </section>

        <section className="min-h-[300px] rounded bg-grid-col shadow-xl sm:col-span-3">
          <div className="flex justify-center pt-32 text-white">
            <label htmlFor="checkbox" className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="mr-2 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              doodhu received
            </label>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Home;