import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IRecipe } from '../../services/types/responsePayloadTypes';

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="text-decoration-none"
      title={recipe.title}
    >
      <Card className="mb-3 d-flex flex-row">
        <Card.Img
          variant="left"
          src={recipe.image}
          alt={`Image of ${recipe.title}`}
          className="w-32 h-32 object-cover flex-shrink-0 mr-3 rounded-l max-md:w-24 max-md:h-24"
          loading="lazy"
        />
        <Card.Body className="d-flex align-items-center">
          <Card.Title className="mb-0 text-md max-md:text-sm">
            {recipe.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default RecipeCard;
