import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { TransactionsModule } from './transactions/transactions.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Collection } from './collection/entities/collection.entity';
@Module({
  imports: [
    CollectionModule,
    TransactionsModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'meir',
      autoLoadModels: true,
      synchronize: true,
      models: [Collection],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
