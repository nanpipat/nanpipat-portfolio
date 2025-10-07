import Head from 'next/head'
import { ReactNode } from 'react'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import LazyVoxelRobot from '../voxel-robot'

interface MainProps {
  children: ReactNode
  router: {
    asPath: string
  }
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nanpipat Klinpratoom - Website</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Box position="relative" zIndex={0}>
          <LazyVoxelRobot />
        </Box>
        <Box position="relative" zIndex={1}>
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  )
}

export default Main