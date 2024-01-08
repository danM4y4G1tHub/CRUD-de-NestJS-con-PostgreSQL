import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import {
  IsString,
  MinLength,
  IsInt,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class UpdateCatDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  name?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  breed?: string;
}
