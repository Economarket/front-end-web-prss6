import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin: 2rem 3rem;
    filter: drop-shadow(0px 4px 4px #0005);
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 17rem;
    background-color: ${theme.colors.whiteFull};
    border: 1px solid #DDD;
    border-radius: 10px 10px 0 0;
`;
    
export const InfoContainer = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 25rem;
    padding: 1rem;
    background-color: ${theme.colors.whiteFull};
    border: 1px solid #DDD;
    border-radius: 0 0 10px 10px;
`;

export const Image = styled.img`
    width: 60%;
`;

const Lato = styled.p`
    font-family: 'Lato';
    font-style: normal;
    color: #004068;
    text-align: center;
`;

export const Name = styled(Lato)`
    font-size: 1.8rem;
    font-weight: 600;
`;

interface PriceProps {
    color?: string;
}
export const Price = styled(Lato)<PriceProps>`
    ${({color}) => (`color: ${color};` || '')}
    font-size: 1.6rem;
    font-weight: 600;
`;

export const Info = styled(Lato)`
    font-size: 1.5rem;
    font-weight: 400;
`

export const Button = styled.p`
    width: 100%;
    text-align: center;
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: ${theme.border.radius.medium};
    background-color: ${theme.colors.blue300};
    color: ${theme.colors.offwhite};

    &:hover {
        cursor: pointer;
        background-color: ${theme.colors.blue200};
    }
`;