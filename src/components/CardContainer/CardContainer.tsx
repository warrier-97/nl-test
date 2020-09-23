import React, { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Item } from 'domain/models/Item';
import { StoryCard } from 'components/Card/Card';
import 'components/CardContainer/CardContainer.scss';

interface IProps {
  stories: Item[];
}

const CardContainer = ({ stories }: IProps): React.ReactElement => {
  return (
    <Container className="container">
      <Row>
        {stories.map(
          (item: Item): React.ReactNode => {
            return (
              <Col md={3} xs={12} sm={6} className="row-container">
                <StoryCard story={item.story} isFavorite={false} />
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
