import { Module } from '@nestjs/common';
import { CollectionProviders } from './collection.providers';
import { CollectionService } from './collection.service';

import { CollectionController } from './collection.controller';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, ...CollectionProviders],
})
export class CollectionModule {}
