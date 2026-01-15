import { Controller } from '@nestjs/common';
import { CollectionService } from './collection.service';
// import { CollectionService } from './collection.service';
// import { CreateCollectionDto } from './dto/create-collection.dto';
// import { UpdateCollectionDto } from './dto/update-collection.dto';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}
}
