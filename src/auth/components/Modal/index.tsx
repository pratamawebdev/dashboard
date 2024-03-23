import React, { FC, MouseEvent } from "react";
import "./index.css";
import Image from "next/image";

interface ModalProps {
  title: string;
  description: string;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const Modal: FC<ModalProps> = ({ title, description, onClick }) => {
  return (
    <>
      <div className="position-fixed modal-click" onClick={onClick}></div>
      <div className="position-fixed container-modal">
        <div className="content-modal">
          <div className="position-absolute modal-click-x" onClick={onClick}>
            <Image src={"/images/icon/x.svg"} fill alt="X" />
          </div>

          <div className="d-flex flex-column mt-5 row-gap-4 justify-content-center align-items-center">
            <div className="wrapper-icon">
              <Image
                src={"/images/icon/success.svg"}
                fill
                alt="Success image"
                className="object-fit-cover"
                sizes="(max-width: 150px) 150px, 100px"
              />
            </div>
            <div className="d-flex flex-column align-items-center wrapper-body">
              <h3 className="text-dark fw-bold">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
