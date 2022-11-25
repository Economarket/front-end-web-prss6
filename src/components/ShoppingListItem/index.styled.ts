import styled from "styled-components";
import theme from "../../styles/theme";

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

export const Container = styled(Flex)`
    width: 100%;
    background-color: ${theme.colors.whiteFull};
    border: 1px solid #DDD;
    border-radius: ${theme.border.radius.large};  
    margin: 1rem 0;
    padding: 1rem 2rem;
    justify-content: space-between;
`;

export const InfoContainer = styled(Flex)`
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 5rem;
    align-items: flex-start;
`;

export const QtdContainer = styled(Flex)`
    justify-content: flex-start;
    height: 10rem;
`;

export const CategoryImage = styled.img`
    height: 100%;
    margin: 0 2rem;
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

export const Price = styled(Lato)`
    font-size: 1.6rem;
    font-weight: 600;
`;

export const QtdInput = styled.input`
    font-size: 2rem;
    text-align: right;
    width: 10rem;
    padding: 1rem;
    border: 1px  solid ${theme.colors.blue300};
    border-radius: ${theme.border.radius.large};
    margin: 0 5rem;
`;

export const TrashContainer = styled.div`
    cursor: pointer;
`;

export const TrashIconContainer = styled.div`
    cursor: pointer;
    text-align: right;
`;