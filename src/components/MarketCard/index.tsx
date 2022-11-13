import { markets_assets } from "../../assets/markets/markets";
import { Market } from "../../services/models"
import { Address, AddressContainer, Button, Container, InfoContainer, LogoContainer, Logo, Title } from "./index.styled";

interface MarketCardProps {
    market: Market;
    onClick: () => void;
}
const MarketCard: React.FC<MarketCardProps> = ({ market, onClick }) => {
    return (
        <Container>
            <LogoContainer>
                <Logo alt={market.name} src={markets_assets[market.uuid]}/>
            </LogoContainer>
            <InfoContainer>
                <Title>{market.name}</Title>
                <AddressContainer>
                    <Address>{`${market.address?.street}, ${market.address?.number}`}</Address>
                    <Address>{`CEP: ${market.address?.cep}`}</Address>
                </AddressContainer>
                <Button onClick={onClick}>Ir para essa loja</Button>
            </InfoContainer>
        </Container>
    );
};

export default MarketCard;