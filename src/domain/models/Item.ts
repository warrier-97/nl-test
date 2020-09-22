import { JsonObject, JsonProperty } from 'services/ObjectMapper';
import { Story } from 'domain/models/Story';

@JsonObject('Item')
export class Item {
  @JsonProperty('id', String)
  private _id = '';

  @JsonProperty('story', Story)
  private _story = new Story();

  get id(): string {
    return this._id;
  }

  get story(): Story {
    return this._story;
  }
}
