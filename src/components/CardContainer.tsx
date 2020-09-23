import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Item } from 'domain/models/Item';

interface IProps {
  stories: Item[];
}

export const CardContainer = ({ stories }: IProps): React.ReactElement => {
  return (
    <Container>
      <Row>
        {stories.map(
          (item: Item): React.ReactNode => {
            const { headline, subHeadline, src } = item.story;
            return (
              <Col md={3} xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={src} />
                  <Card.Body>
                    <Card.Title>{headline}</Card.Title>
                    <Card.Text>{subHeadline}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        )}
      </Row>
    </Container>
  );
};
