import { ALERT_VARIANT, AlertContainer } from "./styled";

interface AlertProps {
  variant: ALERT_VARIANT;
  content: string;
}

export function Alert({ variant, content }: AlertProps) {
  return (
    <AlertContainer variant={variant}>
      <p>{content}</p>
    </AlertContainer>
  );
}
