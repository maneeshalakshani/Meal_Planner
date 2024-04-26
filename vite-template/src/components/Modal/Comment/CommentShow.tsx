import { Text, Avatar, Group, TypographyStylesProvider, Paper, Grid } from '@mantine/core';
import classes from './CommentShow.module.css';
import { DeleteBtn } from '@/components/buttons/DeleteAndEdit/DeleteBtn';
import { UpdateBtn } from '@/components/buttons/DeleteAndEdit/UpdateBtn';
import { useEffect, useState } from 'react';
import { getUserWithId } from '@/Functions/User/user';
import { deleteCommentById } from '@/Functions/Comment/comment';

export function CommentShow({comment, userId, commentID}: any) {
  const [user, setUser] = useState('loading...');

  useEffect(() => {
    getUser(userId);
  }, []); 

  const getUser = async (userId:any) => {
    try {
      const data = await getUserWithId(userId);
      setUser(data.name);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  const deleteComment = () => {
    deleteCommentById(commentID);
  }

  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Grid>
        <Grid.Col span={1.3}>
            <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
            alt="Jacob Warnhalter"
            radius="xl"
            /> 
        </Grid.Col>
        <Grid.Col span={5}>
            <div>
            <Text fz="sm">{user}</Text>
            {/* <Text fz="xs" c="dimmed">
                10 minutes ago
            </Text> */}
            </div>
        </Grid.Col>
        {localStorage.getItem('userId') == userId
          ? <Grid.Col span={2.7} offset={3}>
              <Grid>
                  <Grid.Col span={5}>
                      <DeleteBtn onClick={() => deleteComment()} />
                  </Grid.Col>
                  <Grid.Col span={5}>
                      <UpdateBtn />
                  </Grid.Col>
              </Grid>
            </Grid.Col>
          : null
          }  
      </Grid>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: `<p>${comment}</p>`,
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
}