import { useBreakpointValue,Text} from '@chakra-ui/react'
export default function UseBreakPointvalueExample(){
    const someVariable=useBreakpointValue({
        base:"its base",
        sm:'its small',
        md:"its medium",
        lg:"its large",
        xl:"its extar",
        "2xl":"its extra extrallllll"
    })
    return(
        <>
        <Text bg={"brand.900"} color="brand.400">{someVariable}</Text>
        </>
    )
}