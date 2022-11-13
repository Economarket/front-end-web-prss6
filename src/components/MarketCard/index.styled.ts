import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 30rem;
    height: 13rem;
    border-radius: ${theme.border.radius.large};
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0.75rem;
    background-color: ${theme.colors.blue300}0C;
`;

export const Logo = styled.img`
    width: 100%;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: ${theme.colors.blue300}15;
    padding: 1.25rem;
`;

const Label = styled.p`
    color: ${theme.colors.blue200};
    text-align: center;
    font-family: 'Lato';
    font-style: normal;
`;

export const Title = styled(Label)`
    font-weight: 700;
    font-size: 1.5rem;
`;

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Address = styled(Label)`
    font-size: 1rem;
`;

export const Button = styled.p`
    width: 100%;
    text-align: center;
    font-family: 'Lato';
    padding: 0.5rem;
    border-radius: ${theme.border.radius.medium};
    background-color: ${theme.colors.blue300};
    color: ${theme.colors.offwhite};

    &:hover {
        cursor: pointer;
        background-color: ${theme.colors.blue200};
    }
`;
