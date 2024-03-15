import React from "react";
import Doodh from "../assets/doodh.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-home-col min-h-[100vh]">
      <Navbar />
      <h1 className="flex justify-normal pt-12 ps-4 underline text-white text-4xl">
        Home
      </h1>
      <div className="flex justify-center pt-12">
        <img src={Doodh} className="border-8 border-red-500 rounded-lg"></img>
      </div>
      <div className="m-2 grid gap-6 pt-12 sm:grid-cols-12 ">
        
        <div className="min-h-[300px] rounded bg-grid-col shadow-xl sm:col-span-9">
          <div class="flex justify-start text-white ps-2">
            Rules:{/* <span class="bg-blue-300">Rules:</span> */}
          </div>
          <div className="flex justify-start text-white ps-2">
            <span>
              <p>1. The rate of milk as of March 2024 is ₹50.</p>
              <p>
                2. Duty of washing the utensil is divided equally in the order
                (Vikku {"->"} Immortal {"->"} Kriti).
              </p>
              <p>
                3. Payment to Vishal is done individually by all parties and
                it's upto their own agreement.
              </p>
              <p>4. Amount to be paid per litre :</p>
              <p class="ps-5">Vikku: ₹14*</p>
              <p class="ps-5">Kriti: ₹18</p>
              <p class="ps-5">Immortal: ₹18</p>
              <br></br>
              <p>*As Vikku receives lesser amount of milk so he pays less.</p>
            </span>
          </div>
        </div>

        <div className="min-h-[300px] rounded bg-grid-col shadow-xl sm:col-span-3">
          <div className="flex justify-center pt-32 text-white">
            <form>
              <label className="justify-center mr-4" for="checkbox">
                doodhu received :
              </label>
              <input type="checkbox" id="checkbox" name="checkbox"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
