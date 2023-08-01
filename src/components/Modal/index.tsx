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
        <img src="src/assets/eclipse.gif" alt="" />
      </ModalDialog>
    </ModalContainer>
  );
}
