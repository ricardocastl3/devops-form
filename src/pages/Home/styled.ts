import styled from "styled-components";

/** Bases components */
const BASE_GROUP_FORM = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.5rem;
`;

const BASE_SELECT_FIELD = styled.select`
  padding: 0.5rem;

  border: 1px solid ${(props) => props.theme["slate-500"]};
  border-radius: 8px;

  color: ${(props) => props.theme["slate-400"]};
  background-color: transparent;

  &::placeholder {
    color: ${(props) => props.theme["slate-500"]};
  }
`;

/** Components */
export const HomeContainer = styled.main`
  flex: 1;

  width: 36rem;
  margin: 4rem auto;

  padding: 3rem 2rem;

  background-color: ${(props) => props.theme["slate-800"]};
  border: 2px solid ${(props) => props.theme["purple-900"]};
  border-radius: 8px;

  h2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    color: ${(props) => props.theme["slate-100"]};
  }

  h3 {
    padding: 0.5rem;
    color: ${(props) => props.theme["slate-300"]};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled(BASE_GROUP_FORM)`
  label {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    display: flex;

    gap: 0.5rem;
    color: ${(props) => props.theme["slate-300"]};
  }

  input[type="text"] {
    padding: 0.5rem;
    color: ${(props) => props.theme["slate-200"]};
    background-color: transparent;

    border: 1px solid ${(props) => props.theme["slate-500"]};
    border-radius: 8px;

    &::placeholder {
      color: ${(props) => props.theme["slate-500"]};
    }
  }
`;

export const FormCheck = styled(BASE_GROUP_FORM)`
  label {
    cursor: pointer;

    color: ${(props) => props.theme["slate-300"]};
    margin-left: 0.5rem;
  }

  button {
    cursor: pointer;

    border: 0;
    border-radius: 8px;

    background-color: ${(props) => props.theme["purple-900"]};
    color: ${(props) => props.theme["slate-100"]};

    margin-top: 0.5rem;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.7rem;
    font-weight: bold;

    gap: 0.5rem;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme["purple-500"]};
    }
  }
`;

export const SimpleSelect = styled(BASE_SELECT_FIELD)`
  color: ${(props) => props.theme["slate-200"]};
  option {
    color: ${(props) => props.theme["slate-200"]};
    background-color: ${(props) => props.theme["slate-900"]};
  }
`;

export const MultipleSelect = styled(BASE_SELECT_FIELD)`
  scrollbar-width: 1rem;
  scroll-snap-points-x: none;

  option {
    padding: 0.5rem;
    color: ${(props) => props.theme["purple-500"]};
    background-color: transparent;
  }
  height: 10rem;
`;
