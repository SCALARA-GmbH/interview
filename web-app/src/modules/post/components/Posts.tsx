import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


export interface Post {
  title: string;
  content: string;
}

export interface PostDto {
  title: string;
  content: string;
}

const Posts: React.FunctionComponent = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const { register, reset, handleSubmit: handleFormSubmit, formState: { errors } } = useForm<PostDto>();
    const createPost = async (data: PostDto) => {
        await axios.post<PostDto>('http://localhost:5000/posts', data);
    };
    const handleSubmit = async (data: PostDto) => {
        await createPost(data);
        reset({content: ''});
        await fetchPosts();
    };

  const fetchPosts = async () => {
    const result = await axios.get<Post[]>('http://localhost:5000/posts');
    setPosts(result.data);
  };

    useEffect( () => {
      fetchPosts();
    }, []);
    return(
        <>
            <div>
                <h1>Posts</h1>
                {posts.map((post, index) =>
                    <div key={index}>
                        <h2>{post.title}</h2>
                        {post.content}
                    </div>
                )}
            </div>
            <div>
                <form onSubmit={handleFormSubmit(handleSubmit)}>
                    <input placeholder={'title'} {...register('title', { required: true })} />
                    <input placeholder={'content'} {...register('content', { required: true })} />
                    {errors.content && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default Posts;