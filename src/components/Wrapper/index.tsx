"use client";

import Header from "@/dashboard/components/Header";
import Sidebar from "@/dashboard/components/Sidebar";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";
import "./index.css";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const pathname = usePathname();

  if (pathname === "/auth/login") {
    return <>{children}</>;
  }
  return (
    <div className="wrapper">
      <Sidebar id={"sidebar"} classname={isSidebarOpen ? "" : "collapsed"} />
      <div className="main">
        <Header onClick={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
