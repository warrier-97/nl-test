import React, { memo } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Story } from 'domain/models/Story';
import 'components/Card/Card.scss'

interface IProps {
  story: Story;
  isFavorite: boolean;
}

const StoryCard = ({ story, isFavorite }: IProps): React.ReactElement => {
  const { src, subHeadline, headline } = story;
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Row>
          <Col xs={10}>
            <Card.Title className="headline">{headline}</Card.Title>
          </Col>
          <Col xs={2}>
            <span style={isFavorite ? styles.favorite : styles.unFavorite }>
              <i className="fa fa-heart" />
            </span>
          </Col>
        </Row>
        <Card.Text>{subHeadline}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const styles = {
  favorite: {
    color: 'tomato',
  },
  unFavorite: {
    color: 'black',
  }
}

const memoizedComponent = memo(StoryCard);
export { memoizedComponent as StoryCard };
