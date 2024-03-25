import React from "react";
import "./index.css";
import Image from "next/image";

const Card = ({
  image,
  firstName,
  isFemale,
  handleShowConfirmDelete,
  handleShowDetail,
}) => {
  return (
    <div className="container-card position-relative">
      <div className="position-relative container-image">
        <Image src={image} fill alt="User image" className="object-fit-cover" />
      </div>
      <div className="upper-content-card">
        <span
          className={`rounded-2 fw-bold fs-4 px-3 bg ${
            isFemale ? "firstname-female" : "firstname-male"
          }`}
        >
          {firstName}
        </span>
      </div>
      <div className="lower-content-card d-flex align-items-center gap-4">
        <Image
          src={"/images/icon/trash.png"}
          width={30}
          height={30}
          alt="Trash"
          className="action-btn"
          onClick={handleShowConfirmDelete}
        />

        <Image
          src={"/images/icon/edit.png"}
          width={30}
          height={30}
          alt="Trash"
          className="action-btn"
        />
        <Image
          src={"/images/icon/detail.png"}
          width={30}
          height={30}
          alt="Trash"
          className="action-btn"
          onClick={handleShowDetail}
        />
      </div>
    </div>
  );
};

export default Card;
