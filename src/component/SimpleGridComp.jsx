import { SimpleGrid,Box } from '@chakra-ui/react'
export default function SimpleGridComp(){
  const items=new Array(12).fill(0).map((_,i)=>i+1)
    return(
//         <SimpleGrid columns={[1,2,3,4,5,6]} spacing={10} >
//   {/* <Box bg='tomato' height='80px'></Box>
//   <Box bg='tomato' height='80px'></Box>
//   <Box bg='tomato' height='80px'></Box>
//   <Box bg='tomato' height='80px'></Box>
//   <Box bg='tomato' height='80px'></Box> */}
//   {items.map(el=><Box  bg='tomato' height='80px' >
//     {el}</Box>)}
// </SimpleGrid>
<SimpleGrid columns={{base:1,sm:2,md:3,lg:4,xl:5,'2xl':6}} spacing={10} >
   {items.map(el=><Box  bg='tomato' height='80px' >
     {el}</Box>)}
 </SimpleGrid>
    )
}