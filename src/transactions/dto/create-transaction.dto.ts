export class CreateTransactionDto {}
import { IsString } from 'class-validator';
export class UserDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  id: string;
  name: string;
  type: string;
  quantity: number;
  pricePerUnit: number;
}
