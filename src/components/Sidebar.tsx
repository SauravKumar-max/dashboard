import React from "react";
import Image from "next/image";
import { MdShowChart, MdWorkspaces } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";

export function Sidebar() {
  return (
    <aside className="sticky top-0 left-0 w-60 bg-white h-screen">
      <div className="w-fit mx-auto my-6">
        <Image
          src={"/assets/logo.png"}
          alt="zag-logo"
          className="invert"
          width={75}
          height={50}
        />
      </div>
      <ul className="flex flex-col gap-2 mt-10 pl-7 pr-3">
        <li>
          <button className="flex items-center gap-3 px-3 py-2">
            <MdShowChart className="w-5 h-5 text-black" />
            <span className="text-sm">Reports</span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 px-3 py-2">
            <MdWorkspaces className="w-5 h-5 text-black" />
            <span className="text-sm">Workspaces</span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 px-3 py-2">
            <AiTwotoneSetting className="w-5 h-5 text-black" />
            <span className="text-sm">Settings</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
