// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ResourceNames = {
  "BRICK": "BRICK",
  "ROCK": "ROCK"
};

const { Player, Resources } = initSchema(schema);

export {
  Player,
  ResourceNames,
  Resources
};