export type fieldType = 'string' | 'number' | 'boolean' | 'number-array';


export enum DefaultsTasks {
  Indexing = 1, 'Database Reset' = 2, 'Video Converting' = 3, 'Photo Converting' = 4, 'Thumbnail Generation' = 5
}

export interface ConfigTemplateEntry {
  id: string;
  name: string;
  type: fieldType;
  defaultValue: any;
}

export interface TaskDTO {
  Name: string;
  ConfigTemplate: ConfigTemplateEntry[];
}
