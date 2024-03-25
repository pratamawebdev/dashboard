import React, { MouseEventHandler, useEffect, useState } from "react";
import "./index.css";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import ProfileDropdown from "../ProfileDropdown";
import { getUserInfo } from "@/dashboard/libs/api";

interface HeaderProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await getUserInfo();
        setUserInfo(userData);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <nav className="navbar navbar-expand px-5 d-flex align-items-center justify-content-between w-100">
      <button
        className="btn"
        id="sidebar-toggle"
        onClick={onClick}
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {userInfo && <ProfileDropdown image={userInfo.image} />}
    </nav>
  );
};

export default Header;
