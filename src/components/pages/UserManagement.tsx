import { memo, useCallback, useEffect, VFC } from "react";
import { Center,useDisclosure, Spinner ,Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: VFC = memo(() =>{
  const { isOpen, onOpen, onClose} = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  console.log(selectedUser)

  useEffect(() => getUsers(),[])

  const onClickUser = useCallback((id: number) =>{
    onSelectUser({ id, users, onOpen })
  },[users, onSelectUser, onOpen])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base:4, md: 10}}>
          {users.map((user)=> (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullname={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
            ) )}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
})