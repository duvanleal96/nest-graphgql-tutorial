import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Post, (post) => post.autor)
  @Field(() => [Post], { nullable: true })
  posts: Post[];
}
