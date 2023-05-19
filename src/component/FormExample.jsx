import { Container, FormControl, FormLabel, HStack, Input, PinInput, PinInputField, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";
export default function FormExample(){
    const [universe, setUniverse] = useState('1')
    const[user,setUserName]=useState("")
    const [extraSmall,setExtra]=useState("")
    const[marvelselect,setMarvel]=useState("flash")
    console.log(user,universe,extraSmall,marvelselect)
    return(
        <Container maxW={{sm:'container.sm',md:'container.md',lg:'container.lg'}}>
          <FormControl>
            <FormLabel>UserName:</FormLabel>
            <Input placeholder='username' onChange={(e)=>setUserName(e.target.value)}/>
          </FormControl>
          <FormControl>
          <Stack spacing={4}>
            <FormLabel>extra small size</FormLabel>
  <Input placeholder='extra small size' size='lg' onChange={(e)=>setExtra(e.target.value)} />
  <FormLabel>small size</FormLabel>
  <Input placeholder='small size'size='lg' />
  <FormLabel>medium size</FormLabel>
  <Input placeholder='medium size' size='lg' />
  <FormLabel>large size</FormLabel>
  <Input placeholder='large size' size='lg' />
</Stack>
          </FormControl>
          <FormControl>
            <FormLabel>Select Marvel</FormLabel>
          <Select placeholder='Select MarvelUniverse' onChange={(e)=>setMarvel(e.target.value)}>
  <option value='flash'>flash</option>
  <option value='marvel'>marvel</option>
  <option value='dc'>dc</option>
</Select>
          </FormControl>
          <HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<RadioGroup onChange={setUniverse} value={universe}>
      <Stack direction='row'>
        <Radio value='Spiderman'>Spiderman</Radio>
        <Radio value='Hulk'>Hulk</Radio>
        <Radio value='BlackWidow'>BlackWidow</Radio>
      </Stack>
    </RadioGroup>
        </Container>
    )
}