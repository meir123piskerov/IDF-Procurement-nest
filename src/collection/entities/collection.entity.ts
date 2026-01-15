import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Collection extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}

// import { Table, Column, Model, DataType } from 'sequelize-typescript';

// @Table({
//   tableName: 'Collection',
//   timestamps: false,
// })
// export class Collection extends Model<Collection> {
//   @Column({
//     type: DataType.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   })
//   declare id: number;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   name: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   type: string;

//   @Column({
//     type: DataType.NUMBER,
//     allowNull: false,
//   })
//   quantity: number;

//   @Column({
//     type: DataType.NUMBER,
//     allowNull: false,
//   })
//   pricePerUnit: number;
//   @Column({
//     type: DataType.BOOLEAN,
//     allowNull: false,
//     defaultValue: false,
//   })
//   hasImage: boolean;
// }
