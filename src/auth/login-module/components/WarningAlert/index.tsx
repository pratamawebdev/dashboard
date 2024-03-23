import React, { ReactNode, MouseEvent } from "react";
import Image from "next/image";
import "./index.css";

interface WarningAlertProps {
  children: ReactNode;
  onClick: () => void;
}

const WarningAlert: React.FC<WarningAlertProps> = ({ children, onClick }) => {
  return (
    <div className="warning-container mb-3 d-flex justify-content-between align-items-center px-2 py-1">
      <div className="position-relative wrapper-icon">
        <Image
          src={"/images/icon/warning-circle.svg"}
          fill
          sizes="( max-width: 32px) 32px, 100px"
          alt="Warning"
        />
      </div>
      <span className="text-white">{children}</span>
      <div onClick={onClick} className="position-relative wrapper-icon-x">
        <Image
          src={"/images/icon/x.svg"}
          fill
          alt="X close"
          sizes="(max-width: 27px) 27px, 100px"
        />
      </div>
    </div>
  );
};

export default WarningAlert;
