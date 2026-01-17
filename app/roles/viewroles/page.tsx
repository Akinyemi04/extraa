"use client";
import React, { useState } from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Popup from "./Popup";

const Page = () => {
  const [Search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="bg-white rounded-2xl min-h-screen w-full p-3 flex flex-col relative">
      <h3
        className={` test border rounded-xl pl-2 font-medium text-[18px] border-[#36363633] mb-3 py-1`}
      >
        Roles
      </h3>
      <main className=" rounded-xl w-full  border border-[#36363633] py-2 flex-1 flex flex-col">
        <header className="flex justify-between items-center pb-2 border-b border-[#36363633] px-2">
          <aside className="flex items-center gap-2">
            <Image
              src={"/images/add.png"}
              alt=""
              width={40}
              height={40}
            ></Image>
            <span className="font-inter text-[14px] font-medium">
              Add Roles
            </span>
          </aside>
          <aside className="flex gap-3">
            <div className="border rounded-md border-[#D0D5DD] flex p-1 items-center focus-within:ring-1 focus-within:ring-[#363636]">
              <Image
                src={"/images/search.png"}
                alt=""
                width={12}
                height={12}
                className="object-contain"
              ></Image>
              <input
                type="text"
                className="outline-none text-[14px] font-medium font-inter ml-2 focus:border-[#363636] "
                placeholder="Search"
                value={Search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                setShowPopup(true);
              }}
              className="ml-2 flex gap-1 bg-[#000130] text-white cursor-pointer hover:opacity-70 trasnsition-all duration-100 ease-in-out rounded-md text-[14px] px-3 py-1 items-center"
            >
              <AddIcon className="h-4 w-4 scale-90" />
              <span>Add new Role</span>
            </button>
          </aside>
        </header>
        <section className="relative flex-1">
          <div className="flex flex-col  font-inter text-center items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
            <Image
              src={"/images/error.png"}
              alt=""
              width={40}
              height={40}
            ></Image>
            <p className="text-[14px] mt-3 font-medium">No Roles</p>
            <p className="text-[#25262899] text-[12px]">
              There’s nothing to view
            </p>
          </div>
        </section>
        <footer className="pagination pt-3 border-t border-[#36363633]  flex items-center justify-end pr-3 font-inter font-medium">
          <div className="font-inter font-semibold text-[12px] gap-0.75 flex items-center mr-5">
            <span>1</span>
            <span>of</span>
            <span>1</span>
            <span>Pages</span>
          </div>
          <div className="flex gap-2 text-[12px]">
            {" "}
            <button className="p-2 border rounded-lg cursor-not-allowed border-[##D0D5DD] text-[#D0D5DD] flex items-center gap-1">
              <ArrowBackIcon className="h-4 w-4 scale-90" />{" "}
              <span className="text-[14px]">Previous</span>
            </button>
            <button className="p-2 border rounded-lg cursor-not-allowed border-[##D0D5DD] text-[#D0D5DD] flex items-center gap-1">
              <span className="text-[14px]">Next</span>{" "}
              <ArrowForwardIcon className="h-4 w-4 scale-90" />{" "}
            </button>
          </div>
        </footer>
      </main>
      {showPopup && <Popup cancelPopup={() => setShowPopup(false)} />}
    </div>
  );
};

export default Page;
