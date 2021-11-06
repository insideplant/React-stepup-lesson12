import { memo,VFC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react"

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullname: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) =>{
  const { id, imageUrl, userName, fullname, onClick } = props;
  return (
    <Box 
      w="260px"
      h="260px" 
      bg="white" 
      borderRadius="10px" 
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image 
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullname}
        </Text>
      </Stack>  
    </Box> 
  );
})