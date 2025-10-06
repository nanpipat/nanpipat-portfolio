import { forwardRef, ReactNode } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const RobotSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

interface RobotContainerProps {
  children: ReactNode
}

export const RobotContainer = forwardRef<HTMLDivElement, RobotContainerProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={['15px', '15px', '15px']}
      mb={['15px', '15px', '15px']}
      w={[280, 480, 480]}
      h={[280, 480, 480]}
      position="relative"
      zIndex={0}
    >
      {children}
    </Box>
  )
)

RobotContainer.displayName = 'RobotContainer'

const Loader = () => {
  return (
    <RobotContainer>
      <RobotSpinner />
    </RobotContainer>
  )
}

export default Loader