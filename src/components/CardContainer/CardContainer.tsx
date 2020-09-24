import React, { memo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
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

    if (favorites.includes(id)) {
      updatedSet = favorites.filter((item) => item !== id);
    }

    setFavorite(updatedSet);
    StorageService.set<string[]>(StorageKeys.Favourites, updatedSet);
  };

  return (
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
  );
};

const memoizedComponent = memo(CardContainer);
export { memoizedComponent as CardContainer };
