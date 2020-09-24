import React, { useEffect, useState, memo } from 'react';
import { Spinner } from 'react-bootstrap';
import { Repository } from 'domain/repositories/Repository';
import { CardContainer } from 'components/CardContainer/CardContainer';
import { Item } from 'domain/models/Item';

const App = (): React.ReactElement => {
  const [stories, setStories] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return !loading ? <CardContainer stories={stories} /> : <Spinner animation="border" />;
};

const memoizedComponent = memo(App);
export { memoizedComponent as App };
