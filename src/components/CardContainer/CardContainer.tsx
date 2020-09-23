import React, { memo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { StorageKeys, StorageService } from 'services/StorageService';
import { StoryCard } from 'components/Card/Card';
import { Item } from 'domain/models/Item';
import 'components/CardContainer/CardContainer.scss';

interface IProps {
  stories: Item[];
}

const CardContainer = ({ stories }: IProps): React.ReactElement => {
  const [favorites, setFavorite] = useState<string[]>(StorageService.get<string[]>(StorageKeys.Favourites) ?? []);

  const onFavorite = (id: string): void => {
    let updatedSet = [...favorites, id];

    if(favorites.includes(id)) {
      updatedSet = favorites.filter((item) => item !== id);
      setFavorite(updatedSet)
    }

    setFavorite([...favorites, id]);
    StorageService.set<string[]>(StorageKeys.Favourites, updatedSet);
  };

  return (
    <Container className="container">
      <Row>
        {stories.map(
          (item: Item): React.ReactNode => {
            const {
              story: { id },
            } = item;

            return (
              <Col lg={3} xs={12} sm={6} className="row-container" key={id}>
                <StoryCard story={item.story} isFavorite={favorites.includes(id)} onFavorite={onFavorite} />
              </Col>
            );
          }
        )}
      </Row>
    </Container>
  );
};

const memoizedComponent = memo(CardContainer);
export { memoizedComponent as CardContainer };
