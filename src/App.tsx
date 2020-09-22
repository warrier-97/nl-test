import React from 'react';
import { Repository } from 'domain/repositories/Repository';

export class App extends React.PureComponent<{}, {}> {
  public componentDidMount = async (): Promise<void> => {
    const response = await Repository.getStories();
    console.log(response);
  };

  public render = (): React.ReactNode => {
    return (
      <>
        <p>Hey There!</p>
        <span style={{ color: 'tomato' }}>
          <i className="fa fa-heart" />
        </span>
      </>
    );
  };
}
