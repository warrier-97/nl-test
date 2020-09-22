import { ObjectMapper } from 'services/ObjectMapper';
import { Item } from 'domain/models/Item';

const ENDPOINTS = {
  getStories: 'https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json',
};

class Repository {
  public getStories = async (): Promise<any> => {
    let response = await fetch(ENDPOINTS.getStories);
    const jsonResponse = await response.json();
    return ObjectMapper.deserializeArray(Item, jsonResponse.items);
  };
}

const repo = new Repository();
export { repo as Repository };
