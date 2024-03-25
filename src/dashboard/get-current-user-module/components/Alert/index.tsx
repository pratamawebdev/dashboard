import { ReactNode } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./index.css";

interface AlertComponentProps {
  show: boolean;
  variant: string;
  children: ReactNode;
  onClick: () => void;
}

function AlertComponent({
  show,
  variant,
  children,
  onClick,
}: AlertComponentProps) {
  return (
    <Alert
      show={show}
      variant={variant}
      className="alert d-flex justify-content-between align-items-center gap-4"
    >
      <Alert.Heading>{children}</Alert.Heading>
      <Button onClick={onClick} variant="outline-success">
        Close me
      </Button>
    </Alert>
  );
}

export default AlertComponent;
