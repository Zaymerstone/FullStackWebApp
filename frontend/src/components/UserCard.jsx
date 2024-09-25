import { Card, CardHeader, Flex, Avatar, Box, Heading, Text, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiTrash } from 'react-icons/bi'

const UserCard = ({user}) => {
  return (
    <Card>

        <CardHeader>
            <Flex gap={4} >
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Avatar src="https://avatar.iran.liara.run/public" />
                    <Box>
                        <Heading size='sm'>{user.name}</Heading>
                        <Text>{user.role}</Text>
                    </Box>
                </Flex>
                <Flex>
                    {/* <EditModal user={user} />*/}
                    <IconButton
                    variant={"ghost"}
                    colorScheme='red'
                    size={"sm"}
                    aria-label='See menu'
                    icon={<BiTrash size={20}/>}                                                
                    />
                </Flex>
            </Flex>
        </CardHeader>
    </Card>
  )
}

export default UserCard