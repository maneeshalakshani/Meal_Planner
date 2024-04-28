
import { getAllUsers } from '@/Functions/User/user';
import { UserCard } from '@/components/Card/UserCard';

import { Stack } from '@mantine/core';
import { useEffect, useState } from 'react';

export function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching meal plans:', error);
    }
  };

  return (
    <div>
        <Stack style={{'position': 'absolute', 'left': '200px', 'marginBottom': '100px', 'width': '80%'}}>
            {users.map((user:any, index) => (
                <div key={index}>
                    <UserCard name={user.name} followers={user.follower} userId={user.userId} />
                </div>
            ))}
        </Stack>
    </div>
  );
}
