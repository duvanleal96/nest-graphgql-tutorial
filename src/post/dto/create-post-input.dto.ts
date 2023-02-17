import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePostInputDto {
  @IsNotEmpty()
  @Field()
  title: string;

  @Field({ nullable: true })
  content: string;
}
