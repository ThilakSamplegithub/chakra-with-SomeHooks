import { Stack, HStack, VStack,Box } from '@chakra-ui/react'
export default function StackExample(){
    return(
        <Stack direction={{base:'row',lg:'column'}} spacing='24px'>
            {/* here responsiveness is manifested by using direction prop, maybe even .... */}
            {/* stack doesn't consider about width at all it just gives spacing specifically as we mentioned */}
            {/* when base is row it acts as Hstack and when col it acts as Vstack */}
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</Stack>
    )
}