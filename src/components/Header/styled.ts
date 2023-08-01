import { styled } from "styled-components";

export const HeaderContainer = styled.header`

  padding: 4rem 8rem;

  width: 100%;

  display: flex;
  align-items: start;
  justify-content: space-between;

  gap: 1rem;

  color: ${(props) => props.theme["slate-300"]};

  @media(max-width:780px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 2;

  a {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    text-decoration: none;
    color: ${(props) => props.theme["red-500"]};
    transition: 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }

  svg {
    color: ${(props) => props.theme["slate-300"]};
  }

  @media(max-width:780px){
    flex-direction: column;
  }
`;

export const HeaderBottom = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;

  a {
    color: ${(props) => props.theme["slate-200"]};
  }

  @media(max-width:780px){
    position: relative;
    top: 0;
    flex-direction: row;
  }
`;
