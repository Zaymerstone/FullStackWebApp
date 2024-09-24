import { Button, ButtonGroup, Container, Stack, Text } from '@chakra-ui/react'
import { Navbar } from './components/Navbar';

function App() {
return (
    <Stack minH={"100vh"}>  {/*Stack is going to put everything in the vertical direction*/}
      <Navbar />
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
        
        >
          My Besties
        </Text>
        🚀
      </Text>
      </Container>
    </Stack>
  )
}

export default App
