import { zodResolver } from "@hookform/resolvers/zod";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { userFormSchema } from "../../libs/form-schema";

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  image: string;
}

interface FormModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: SubmitHandler<FormData>;
}

const FormModal: React.FC<FormModalProps> = ({ show, onHide, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      // Menggunakan defaultValues untuk inisialisasi nilai default
      firstName: "",
      lastName: "",
      age: 0,
      image: "https://robohash.org/Sheldon.png?set=set4", // Nilai default untuk image
    },
  });

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muhammad"
              autoFocus
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ovi"
              autoFocus
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="21"
              autoFocus
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image URL"
              autoFocus
              {...register("image")}
            />
            {errors.image && (
              <p className="text-danger">{errors.image.message}</p>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
