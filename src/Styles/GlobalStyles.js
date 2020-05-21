import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.black};
        font-size: 18px;
        font-family: 'Sunflower', sans-serif;
        font-weight: 300;
    }
    a{
        color: ${(props) => props.theme.black};
        text-decoration: none;
        font-weight: 500;
    }
    input:focus{
        outline: none;
    }
`;
