import { Layout } from '../components/layout/Layout.tsx';
import { useGetRecipeInformationQuery } from '../services/recipe.ts';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import ListInformation from '../components/healthInformation/ListInformation.tsx';
import { capitalizeFirstLetter } from '../utils.ts';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const RecipeDetailPage = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!recipeId) {
      navigate('/');
    } else {
      document.querySelector('h1')?.focus();
    }
  }, [navigate, recipeId]);

  const {
    data: recipe,
    error,
    isLoading,
  } = useGetRecipeInformationQuery(recipeId || '');

  if (!recipe && !isLoading) {
    let errorMessage = 'An error occurred.';

    if (error && 'data' in error) {
      const fetchError = error as FetchBaseQueryError;

      if (fetchError.data && typeof fetchError.data === 'object') {
        errorMessage =
          (fetchError.data as { message?: string }).message || errorMessage;
      }
    }

    return (
      <Layout description="Recipe Detail page" title="Recipe Detail Page">
        <Container>
          <div className="mt-2 text-2xl" role="alert" aria-live="assertive">
            {errorMessage}
          </div>
          <Link
            to={'/'}
            className="text-decoration-underline link-primary mt-6 inline-block"
          >
            Return to Home page
          </Link>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout
      description={`Recipe details of ${recipe?.title}`}
      title="Recipe page"
    >
      <Container>
        {isLoading ? (
          <div className="flex items-center justify-center mt-14">
            <Spinner
              animation="border"
              variant="primary"
              className="text-primary"
            />
          </div>
        ) : (
          <>
            <Card className="mt-4">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={recipe?.image}
                  alt="Photo of the cooked dish"
                  className="float-left w-1/2 mr-3 max-md:w-full max-md:float-none"
                />
                <h1 className="text-3xl font-bold md:mb-4 max-md:mt-2 max-md:mb-2">
                  {recipe?.title}
                </h1>

                <h2 className="text-2xl font-bold ">Summary:</h2>
                <div
                  className="pr-2"
                  dangerouslySetInnerHTML={{ __html: recipe?.summary || '' }}
                />

                <div className="text-lg clear-both flex mt-4 pt-2">
                  <span className="mr-12">
                    <strong>Ready In:</strong> {recipe?.readyInMinutes} minutes
                  </span>
                  <span>
                    <strong>Servings:</strong> {recipe?.servings}
                  </span>
                </div>
              </Card.Body>
            </Card>
            <ListInformation title="Dish type">
              {recipe?.dishTypes.map((type) => (
                <li key={type}>{capitalizeFirstLetter(type)}</li>
              ))}
            </ListInformation>
            <ListInformation title="Health Information">
              {recipe?.diets.map((diet) => (
                <li key={diet}>{capitalizeFirstLetter(diet)}</li>
              ))}
            </ListInformation>
            <ListInformation title="Ingredients">
              {recipe?.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <strong>{capitalizeFirstLetter(ingredient.name)}</strong> -
                  <span>
                    {' '}
                    {ingredient.amount} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ListInformation>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title className="font-bold text-2xl md:text-3xl" as="h2">
                  Instructions
                </Card.Title>
                {recipe?.analyzedInstructions[0].steps.map((step) => (
                  <ol key={step.number} className="mt-3">
                    <li>
                      <h3 className="font-bold">Step {step.number}:</h3>
                      <li>{step.step}</li>
                    </li>
                  </ol>
                ))}
              </Card.Body>
            </Card>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default RecipeDetailPage;
