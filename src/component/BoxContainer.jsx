import { Box, Container,Center } from '@chakra-ui/react';
import { PhoneIcon} from '@chakra-ui/icons'
export default function BoxContainer(){
    return(
        <>
        <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
<Center w='40px' h='40px' bg='tomato' color='white'>
    <PhoneIcon />
  </Center>
<Container>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Container>
        </>
    )
}