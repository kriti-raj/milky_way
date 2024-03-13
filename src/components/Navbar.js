import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Chehra from "../assets/profile.jpg";
import Doodh from "../assets/doodh.jpg";
import { Link } from "react-router-dom";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div className="relative pb-6">
      <div className="absolute top-0 left-0 w-full h-16 bg-gray-900 flex items-center justify-between px-4">
        <div className="flex items-center space-x-12">
          {" "}
          <Link to="/" className="text-white hover:underline">
            <img className="h-8 w-8 rounded-full" src={Doodh} alt="" />
          </Link>{" "}
          <Link to="/jan" className="text-white hover:underline">
            January
          </Link>{" "}
          <Link to="/feb" className="text-white hover:underline">
            Febuary
          </Link>{" "}
          <Link to="/mar" className="text-white hover:underline">
            March
          </Link>{" "}
          <Link to="/apr" className="text-white hover:underline">
            April
          </Link>{" "}
          <Link to="/may" className="text-white hover:underline">
            May
          </Link>{" "}
          <Link to="/june" className="text-white hover:underline">
            June
          </Link>{" "}
          <Link to="/july" className="text-white hover:underline">
            July
          </Link>{" "}
          <Link to="/aug" className="text-white hover:underline">
            August
          </Link>{" "}
          <Link to="/sep" className="text-white hover:underline">
            September
          </Link>{" "}
          <Link to="/oct" className="text-white hover:underline">
            October
          </Link>{" "}
          <Link to="/nov" className="text-white hover:underline">
            November
          </Link>{" "}
          <Link to="/dec" className="text-white hover:underline">
            December
          </Link>{" "}
        </div>

        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src={Chehra} alt="" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
