import { categories_assets } from "../../assets/categories/categories";
import { Category } from "../../services/models";
import { CategoryImage, CategoryName, Container } from "./index.styled";


interface CategoryCardProps {
    category: Category;
    onClick: () => void;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
    return (
        <Container onClick={onClick}>
            <CategoryImage 
                alt={category.searchName} 
                src={categories_assets[category.searchName]}
            />
            <CategoryName>{category.name}</CategoryName>
        </Container>
    );
};

export default CategoryCard;