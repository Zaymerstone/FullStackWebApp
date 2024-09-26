import { Container, Stack, Text } from '@chakra-ui/react'
import { Navbar } from './components/Navbar';
import UserGrid from './components/UserGrid';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
return (
    <Stack minH={"100vh"}>  {/*Stack is going to put everything in the vertical direction*/}
      <Navbar setUsers={setUsers}/>
      <Container maxW={"1200px"} my={4}>
      <Text
      fontSize={{base: "3x1", md: "50"}}
      fontWeight={"bold"}
      letterSpacing={"2px"}
      textTransform={"uppercase"}
      textAlign={"center"}
      mb={8}
      >
        <Text
          as={"span"}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        
        >
          My Besties
        </Text>
        🚀
      </Text>

      <UserGrid users={users} setUsers={setUsers}/>
      </Container>
    </Stack>
  )
}

export default App
