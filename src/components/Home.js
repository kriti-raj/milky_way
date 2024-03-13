import React from "react";
import Doodh from "../assets/doodh.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center pt-12">
        <img src={Doodh} className="border-8 border-red-500 rounded-lg"></img>
      </div>
      <div class="flex justify-start text-gray-900 ps-2">
        <span class="bg-blue-300">Rules:</span>
      </div>
      <div className="flex justify-start text-gray-900 ps-2">
        <span class="bg-blue-100">
          <p>1. The rate of milk as of March 2024 is ₹50.</p>
          <p>
            2. Duty of washing the utensil is divided equally in the order
            (Vikku {"->"} Immortal {"->"} Kriti).
          </p>
          <p>
            3. Payment to Vishal is done individually by all parties and it's upto their
            own agreement.
          </p>
          <p>4. Amount to be paid per litre :</p>
          <p class="ps-5">Vikku: ₹14*</p>
          <p class="ps-5">Kriti: ₹18</p>
          <p class="ps-5">Immortal: ₹18</p>
          <br></br>
          <p>*As Vikku receives lesser amount of milk so he pays less.</p>
        </span>
      </div>
      <div className="flex justify-center">
        <form>
          <label className="justify-center" for="checkbox">
            doodhu received :
          </label>
          <input type="checkbox" id="checkbox" name="checkbox"></input>
        </form>
      </div>
    </div>
  );
};

export default Home;
