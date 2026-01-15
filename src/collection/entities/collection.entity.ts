import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Collection extends Model {
  @Column
  primaryKey: true;
  declare id: string;

  @Column
  name: string;

  @Column
  type: string;

  @Column
  quantity: number;

  @Column
  pricePerUnit: number;
  @Column
  hasImage: boolean;
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
