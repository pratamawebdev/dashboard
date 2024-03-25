import React from "react";
import "./index.css";
import Image from "next/image";
import dataSidebar from "./dataSidebar";
import Link from "next/link";

interface SidebarProps {
  classname: string;
  id: string;
}

const Sidebar: React.FC<SidebarProps> = ({ classname, id }) => {
  return (
    <div id={id} className={`s js-sidebar ${classname}`}>
      <div>
        <div className="d-flex align-items-center justify-content-center gap-3 py-4 logo-sidebar">
          <div className="position-relative wrapper-logo">
            <Image src={"/images/logo/logo.png"} fill alt="logo" />
          </div>
          <span className="text-white fw-bold fs-3">WorkFlow</span>
        </div>
        <div className="sidebar-nav py-5 d-flex flex-column align-items-center justify-content-center">
          {dataSidebar.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className="d-flex gap-3 align-items-center path-item justify-content-center text-decoration-none"
            >
              <div className="position-relative wrapper-icon">
                <Image src={item.icon} fill alt="logo" />
              </div>
              <span className="text-white fw-semibold fs-4">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
