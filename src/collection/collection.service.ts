import { Injectable, Inject } from '@nestjs/common';
// import { CreateCollectionDto } from './dto/create-collection.dto';
import { Collection } from './entities/collection.entity';

@Injectable()
export class CollectionService {
  // create(meir: CreateCollectionDto) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    @Inject('COLLECTION_REPOSITORY')
    private catsRepository: typeof Collection,
  ) {}
}
