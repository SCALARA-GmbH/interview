import { Request, Response } from 'express';

import { connect } from '../database';
import { Post } from '../interface/Post';

export async function getPosts(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function createPost(req: Request, res: Response) {
  try {
    const newPost: Post = req.body;
    const conn = await connect();
    const result = await conn.query('INSERT INTO posts SET ?', [newPost]);
    if (result === 'as expected') { // since i didnt find how an actual result looks like
      res.json({
        message: 'New Post Created',
      });
    } else {
      throw new Error('something went not as expected \n'
        + JSON.stringify(result));
    }
  } catch (e) {
    console.log(e); // better add some sentry, its free
  }
}

export async function getPost(req: Request, res: Response) {
  const id = req.params.postId;
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
  res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response) {
  const id = req.params.postId;
  const conn = await connect();
  await conn.query('DELETE FROM posts WHERE id = ?', [id]);
  res.json({
    message: 'Post deleted',
  });
}

export async function updatePost(req: Request, res: Response) {
  const id = req.params.postId;
  const updatePost: Post = req.body;
  const conn = await connect();
  await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
  res.json({
    message: 'Post Updated',
  });
}
