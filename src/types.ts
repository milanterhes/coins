export interface Currency {
  code: string;
  name: string;
  isSupportedInUS: boolean;
  supportsTestMode: boolean;
}

export enum SortFields {
  name = "name",
  code = "code",
  shuffle = "shuffle",
}
