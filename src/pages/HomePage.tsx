import { Layout } from '../components/layout/Layout.tsx';
import { Container, Form, Spinner } from 'react-bootstrap';
import Pagination from '../components/pagination/Pagination.tsx';
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '../components/button';
import { useLazySearchRecipesQuery } from '../services/recipe.ts';
import RecipeCard from '../components/recipeCard/RecipeCard.tsx';
import { SearchRecipesParams } from '../services/types/requestPayloadTypes.ts';
import { Selector } from '../components/Selector/Selector.tsx';
import { cuisineOptions } from '../constants.ts';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = useMemo(() => {
    return searchParams.get('query') || '';
  }, [searchParams]);

  const [cuisine, setCuisine] = useState('European');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const [fetchRecipes, { data: recipes, isFetching }] =
    useLazySearchRecipesQuery();

  const handleRequestRecipes = useCallback(
    (params?: Partial<SearchRecipesParams>) => {
      const fetchParams = {
        query: searchTerm,
        cuisine,
        page,
        ...params,
      };
      fetchRecipes(fetchParams).then(({ data }) =>
        setTotalResults(data?.totalResults || 1)
      );
    },
    [cuisine, fetchRecipes, page, searchTerm]
  );

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setPage(1);
    handleRequestRecipes({ page: 1 });
  };

  useEffect(() => {
    if (searchTerm) {
      handleRequestRecipes();
    }
  }, [handleRequestRecipes]);

  return (
    <Layout description="Search of recipes" title="Homepage">
      <Container>
        <Form className="mt-3" onSubmit={handleSearch}>
          <div className="d-flex align-items-center gap-2 mb-3">
            <Form.Group className="flex-grow-1">
              <Form.Control
                type="text"
                placeholder="Search for recipes"
                value={searchTerm}
                onChange={(e) =>
                  setSearchParams((params) => {
                    params.set('query', e.target.value);
                    return params;
                  })
                }
              />
            </Form.Group>
            <Button variant="primary" text="Search" type="submit" />
          </div>
        </Form>

        <Selector
          options={cuisineOptions}
          onSelect={(value) => {
            setCuisine(value);
            handleRequestRecipes({ cuisine: value });
          }}
          ariaLabel="Filter by:"
          defaultOption={{
            label: 'All Categories',
            value: '',
          }}
          className="mb-3"
        />
        {recipes?.totalResults === 0 && !isFetching && (
          <div>No results found</div>
        )}
        {isFetching && <Spinner animation="border" variant="primary" />}
        {!!recipes?.totalResults && (
          <>
            <div className="mb-3">Total results found: {totalResults}</div>
            {recipes.results.map((el) => (
              <RecipeCard recipe={el} key={el.id.toString()} />
            ))}
            <Pagination
              currentPage={page}
              onPageChange={(page) => {
                setPage(page);
                handleRequestRecipes({ page });
              }}
              totalResults={totalResults}
            />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default HomePage;
