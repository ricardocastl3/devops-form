import { ModalContainer, ModalDialog } from "./styled";
import { Check } from "@phosphor-icons/react";

interface ModalProps {
  content: string;
}
export function Modal({ content }: ModalProps) {
  return (
    <ModalContainer>
      <ModalDialog>
        <Check size={30} />
        <h2>{content}</h2>
        <img src="https://github.com/ricardocastl3/devops-form/blob/main/src/assets/eclipse.gif?raw=true" alt="" />
      </ModalDialog>
    </ModalContainer>
  );
}
