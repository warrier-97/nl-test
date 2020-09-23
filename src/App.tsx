import React, { useEffect, useState, memo } from 'react';
import { Repository } from 'domain/repositories/Repository';
import { CardContainer } from 'components/CardContainer/CardContainer';
import { Item } from 'domain/models/Item';

const App = (): React.ReactElement => {
  const [stories, setStories] = useState<Item[]>([]);

  useEffect(() => {
    const getStories = async (): Promise<void> => {
      const stories = await Repository.getStories();
      setStories(stories);
    };

    getStories().then();
  }, []);

  return <CardContainer stories={stories} />;
};

const memoizedComponent = memo(App);
export { memoizedComponent as App };
