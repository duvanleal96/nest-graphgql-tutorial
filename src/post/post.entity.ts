import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../authors/entities/author.entity';

@Entity()
@ObjectType()
export class Post {
  @Column()
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  content?: string;

  @ManyToOne(() => Author, (author) => author.posts)
  @Field()
  autor: Author;
}
