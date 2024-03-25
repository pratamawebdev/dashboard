import Image from "next/image";
import React, { useRef, useState, RefObject } from "react";
import "./index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProfileDropdownProps {
  image: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ image }) => {
  const Menus = ["Profile", "Logout"];
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
    setOpen(false);
  };

  window.addEventListener("click", (e) => {
    if (
      e.target !== menuRef.current &&
      e.target !== imgRef.current &&
      imgRef.current &&
      !imgRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  });
  return (
    <>
      <div className="position-relative">
        <Image
          ref={imgRef}
          onClick={() => setOpen(!open)}
          src={image}
          alt="Profile image"
          width={40}
          height={40}
          className="object-fit-cover profile-image"
        />
        {open && (
          <div
            ref={menuRef}
            className="bg-white profile-dropdown position-absolute"
          >
            <div className="d-flex flex-column">
              <Link
                href={"/profile"}
                onClick={() => setOpen(false)}
                className="fs-6 text-decoration-none menu"
              >
                Profile
              </Link>
              <span className="fs-6 menu" onClick={handleLogout}>
                Logout
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
