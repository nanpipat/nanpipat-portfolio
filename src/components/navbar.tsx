import Logo from './logo'
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'

interface NavBarProps {
  path?: string
}

const NavBar = (props: NavBarProps) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        // @ts-ignore - Chakra UI prop type issue
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex justify="center" align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        />
        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar