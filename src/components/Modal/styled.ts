import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["slate-900"]};
  opacity: 0.9;
`;

export const ModalDialog = styled.div`
  background-color: ${(props) => props.theme["slate-800"]};
  color: ${(props) => props.theme["slate-900"]};

  border-radius: 8px;
  padding: 2rem;
  width: 20rem;

  display: flex;
  align-items: center;

  gap: 0.5rem;

  font-size: 0.7rem;
  color: ${(props) => props.theme["slate-100"]};
  
  h2 {
    color: ${(props) => props.theme["green-500"]};
  }
`;
