import { Button, ButtonGroup, Container, Stack } from '@chakra-ui/react'
import { Navbar } from './components/Navbar';

function App() {
return (
    <Stack minH={"100vh"}>  {/*Stack is going to put everything in the vertical direction*/}
      <Navbar />
      <Container maxW={"1200px"} my={4}>

      </Container>
    </Stack>
  )
}

export default App
