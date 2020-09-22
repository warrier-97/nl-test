import { JsonObject, JsonProperty } from 'services/ObjectMapper';

const IMAGE_SRC_PREFIX = 'https://gumlet.assettype.com/';

@JsonObject('Story')
export class Story {
  @JsonProperty('author-name', String)
  private _authorName = '';

  @JsonProperty('headline', String)
  private _headline = '';

  @JsonProperty('subheadline', String)
  private _subHeadline = '';

  @JsonProperty('id', String)
  private _id = '';

  @JsonProperty('hero-image-s3-key', String)
  private _src = '';

  get id(): string {
    return this._id;
  }

  get authorName(): string {
    return this._authorName;
  }

  get headline(): string {
    return this._headline;
  }

  get subHeadline(): string {
    return this._subHeadline;
  }

  get src(): string {
    return `${IMAGE_SRC_PREFIX}${this._src}`;
  }
}
