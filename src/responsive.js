import { css } from "styled-components";

export const mobile = (props) => {
    return css `
    @media only screen and (max-width: 450px) {
        ${props}
    }
    
    `;
}

// example for tablet

export const tablet = (props) => {
    return css `
    @media only screen and (max-width: 1010px) {
        ${props}
    }
    
    `;
}