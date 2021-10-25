import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../shared/components/Input';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomButton from '../../../shared/components/Button';
import CustomGridItem from '../../../shared/components/GridItem';
import { useParams } from 'react-router-dom';
export interface Comment {
  date: Date;
  content: string;
  postId: number;
}

export interface CommentsDto {
  date?: Date;
  content: string;
  postId: number;
}

const Comments: React.FunctionComponent = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const { topicId }: any = useParams();
  const { register, reset, handleSubmit: handleFormSubmit, formState: { errors } } = useForm<CommentsDto>();
  const createPost = async (data: CommentsDto) => {
    await axios.post<CommentsDto>('http://localhost:5000/comments', data);
  };
  const handleSubmit = async (data: CommentsDto) => {


    data.postId = 1;
    await createPost(data);
    reset({ content: '' });
    await fetchComments(1);
  };

  const fetchComments = async (id: number) => {
    const result = await axios.get<Comment[]>('http://localhost:5000/comments?post-id=' + id);
    setComments(result?.data ? result?.data : []);
  };

  useEffect(() => {
    console.log(topicId)
    fetchComments(topicId);
  }, []);
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={12}>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={7}>
            <CustomGridItem>
              <div>
                <h1>Comments</h1>


                <Box
                  component="form"
                  noValidate
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { sm: '1fr 1fr' },
                    gap: 2,
                  }}
                >
                  {/* <input placeholder={'Post a comment'} {...register('content', { required: true })} /> */}
                  <CustomInput defaultValue="Post a comment..." id="bootstrap-input" {...register('content', { required: true })} />
                  {errors.content && <div className="err"><span className="red-text">*</span>This field is required</div>}

                  <CustomButton variant="contained" onClick={handleFormSubmit(handleSubmit)}>Post a Comment</CustomButton>
                </Box>


                {comments.map((comment, index) =>
                  <div key={index}>
                    <h2>{comment.content}</h2>
                    {comment.date}
                  </div>
                )}
              </div>
            </CustomGridItem>
          </Grid>
          <Grid item xs={3}>

          </Grid>
        </Grid>
      </Box>




    </>
  );
};

export default Comments;