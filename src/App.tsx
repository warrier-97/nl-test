import React from 'react';
import { CardContainer } from 'components/CardContainer';
import { Repository } from 'domain/repositories/Repository';
import { Item } from 'domain/models/Item';

interface IState {
  stories: Item[];
}

export class App extends React.PureComponent<{}, IState> {
  public state = {
    stories: [],
  };

  public componentDidMount = async (): Promise<void> => {
    const stories = await Repository.getStories();
    this.setState({ stories });
  };

  public render = (): React.ReactNode => {
    const { stories } = this.state;
    return <CardContainer stories={stories} />;
  };
}
