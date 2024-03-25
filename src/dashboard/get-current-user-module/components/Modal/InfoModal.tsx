import Image from "next/image";
import Modal from "react-bootstrap/Modal";

interface InfoModalProps {
  firstName: string;
  show: boolean;
  onHide: () => void;
  image: string;
  lastName?: string;
  maidenName?: string;
  age: number;
  email: string;
  gender: string;
  birthDate: string;
}

const InfoModal: React.FC<InfoModalProps> = ({
  firstName,
  show,
  onHide,
  image,
  lastName,
  maidenName,
  age,
  email,
  gender,
  birthDate,
}) => {
  const maskLastName = (lastName?: string) => {
    const maskedLastName = lastName?.replace(/./g, "*");
    return maskedLastName;
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg" className="fw-bold fs-3">
          Complete profile of {firstName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex gap-5 flex-column">
          <div className="d-flex justify-content-center">
            <Image
              src={image}
              width={300}
              height={300}
              alt={`image of ${firstName}`}
              objectFit="cover"
            />
          </div>
          <div className="d-flex flex-column gap-1">
            <p className="fw-bold fs-5">
              Name: {firstName} {maskLastName(lastName)} {maidenName}
            </p>
            <p className="fw-bold fs-5">Age: {age}</p>
            <p className="fw-bold fs-5">Email: {email}</p>
            <p className="fw-bold fs-5">Birthdate: {birthDate}</p>
            <p className="fw-bold fs-5">Gender: {gender}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;
