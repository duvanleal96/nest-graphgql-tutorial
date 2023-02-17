import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePostInputDto } from './dto/create-post-input.dto';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query((returns) => [Post])
  post() {
    return this.postService.findAll();
  }

  @Query((returns) => Post)
  posts(@Args('id') id: number) {
    return this.postService.findProductById(id);
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInputDto) {
    return this.postService.createPost(postInput);
  }
}
