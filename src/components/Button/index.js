import styled from "styled-components";

const Button = styled.button `
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin-bottom: 30px;


    &:hover,
    &:focus { 
        opacity: .5;
    }
`;

export default Button;