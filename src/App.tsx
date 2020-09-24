import React, { useEffect, useState, memo } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Repository } from 'domain/repositories/Repository';
import { CardContainer } from 'components/CardContainer/CardContainer';
import { Item } from 'domain/models/Item';

const App = (): React.ReactElement => {
  const [stories, setStories] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchString, setsearchString] = useState<string>('');

  useEffect(() => {
    const getStories = async (): Promise<void> => {
      try {
        const stories = await Repository.getStories();
        setStories(stories);
      } catch (err) {
        console.warn('API has failed!');
      }
      setLoading(false);
    };

    getStories().then();
  }, [stories]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setsearchString(event.target.value);
    setStories(stories);
  };

  const reqdStories = stories.filter((story) => story.story.headline.startsWith(searchString));

  return (
    <Container className="container">
      <Row style={styles.searchBarContainer}>
        <Col xs={12} md={6} className="row-container">
          <input
            type="text"
            placeholder="Search here"
            value={searchString}
            onChange={onSearch}
            style={styles.searchBar}
          />
        </Col>
      </Row>
      {!loading ? <CardContainer stories={reqdStories} /> : <Spinner animation="border" />}
    </Container>
  );
};

const styles = {
  searchBarContainer: {
    justifyContent: 'center',
  },
  searchBar: {
    width: '100%',
  },
};

const memoizedComponent = memo(App);
export { memoizedComponent as App };
