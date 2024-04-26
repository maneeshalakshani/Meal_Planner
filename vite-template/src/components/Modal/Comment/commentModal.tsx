import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Stack, Group } from '@mantine/core';
import { TextAreaField } from '../../Input/TextArea';
import { NormalButton } from '../../buttons/Button';
import { useEffect, useState } from 'react';
import { getCommentsWithPlan } from '@/Functions/Meal/meal';
import { CommentShow } from './CommentShow';
import { saveComment } from '@/Functions/Comment/comment';

export function CommentModal({mealPlanId}:any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const data = await getCommentsWithPlan(mealPlanId);
      setComments(data);
    } catch (error) {
      console.error('Error fetching meal plans:', error);
    }
  };

  const addComment = () => {
    const comment = {
        "mealplanId": mealPlanId,
        "comment": newComment,
        "userId": localStorage.getItem('userId'),
    }

    saveComment(comment);
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Comments" size="xl">
        <Stack>
          <TextAreaField label={"Comment"} showVal={true} setValue={setNewComment} />
          <NormalButton label={"Add Comment"} onClick={() => addComment()} bgColor={'grey'} />
          <Group>
            {comments.map((cmnt:any, index:any) => (
              <CommentShow key={index} comment={cmnt.comment} userId={cmnt.userId} commentID={cmnt.commentId} />
            ))}
            {comments.length == 0 ? "No Comments..." : null}
          </Group>
        </Stack>
      </Modal>

      <Button onClick={open} style={{ flex: 1 }}>Show Comments</Button>
    </>
  );
}