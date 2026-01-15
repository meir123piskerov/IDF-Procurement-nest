import { Collection } from './entities/collection.entity';

export const CollectionProviders = [
  {
    provide: 'COLLECTION_REPOSITORY',
    useValue: Collection,
  },
];
