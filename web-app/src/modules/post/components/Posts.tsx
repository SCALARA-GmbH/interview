import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CustomButton from '../../../shared/components/Button';
import CustomInput from '../../../shared/components/Input';
import TextField from '@mui/material/TextField';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comments from '../../comment/components/Comments';
export interface Post {
  title: string;
  content: string;
  id:number;
}

export interface PostDto {
  title: string;
  content: string;
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Posts: React.FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { register, reset, handleSubmit: handleFormSubmit, formState: { errors } } = useForm<PostDto>();
  const createPost = async (data: PostDto) => {
    await axios.post<PostDto>('http://localhost:5000/posts', data);
  };
  const handleSubmit = async (data: PostDto) => {
    await createPost(data);
    reset({ content: '' });
    await fetchPosts();
  };

  const fetchPosts = async () => {
    const result = await axios.get<Post[]>('http://localhost:5000/posts');
    setPosts(result.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>


      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={12}>
          <Grid item xs={2}></Grid>
          <Grid item xs={7}>
            <Item>
              <Typography fontWeight={700}>Posts</Typography>
              <CustomInput defaultValue={'title'} {...register('title', { required: true })} />
              <Box
                component="form"
                noValidate
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: '1fr 1fr ' },
                  gap: 2,
                  padding: '10px'
                }}

              >



                <TextField
                  id="standard-multiline-static"

                  multiline
                  rows={4}
                  defaultValue="content"
                  variant="standard" {...register('content', { required: true })}
                />
                <CustomButton variant="contained" onClick={handleFormSubmit(handleSubmit)}>Add Post</CustomButton>

              </Box>
              {errors.content && <div><span className="red-text">*</span>This field is required</div>}

              {posts.map((post, index) =>
                <div key={index}>
                  <h2>{post.title}</h2>
                  <div>
                    {post.content}
                  </div>
                  <Link to={`/comments/${post.id}`}>
                  <CustomButton variant="contained">Post a Comment</CustomButton>
                 </Link>
                </div>

              )}</Item>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>


    </>
  );
};

export default Posts;