import { createGlobalStyle } from "styled-components";

export const GlobalAppStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Oswald', sans-serif;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme["slate-500"]};
        border-radius: 8px;
    }
    ::-webkit-scrollbar{
        width: 8px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${(props) => props.theme["purple-900"]};
    }
    :focus{
        outline: none;
        box-shadow: 0 0 0 1px ${(props) => props.theme["purple-900"]};
        border-radius: 8px;
    }

    input:-internal-autofill-selected {
        appearance: menulist-button;
        background-image: none !important;
        background-color: -internal-light-dark(rgb(0, 0, 0), rgba(0, 0, 0, 0.4)) !important;
        color: fieldtext !important;
    }

    body{
        background-image: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
       
    }

`;
