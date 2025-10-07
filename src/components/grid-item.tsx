import NextLink from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Link } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

interface GridItemProps {
  children: ReactNode
  href: string
  title: string
  thumbnail: StaticImageData | string
  demo: string
  code: string
}

export const GridItem = ({ children, href, title, thumbnail, demo, code }: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        placeholder="blur"
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>

    <Box display="flex" alignContent="center" justifyContent="center" alignItems="center">
      <Box marginRight="20px">
        <Link href={demo} target="_blank">
          Live
        </Link>
      </Box>
      <Box>
        <Link href={code} target="_blank">
          Code
        </Link>
      </Box>
    </Box>
  </Box>
)

interface WorkGridItemProps {
  children: ReactNode
  id: string
  title: string
  thumbnail: StaticImageData | string
}

export const WorkGridItem = ({ children, id, title, thumbnail }: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

interface GridItemNoLiveProps {
  children: ReactNode
  href: string
  title: string
  thumbnail: StaticImageData | string
  demo?: string
  code?: string
}

export const GridItemNoLive = ({ children, href, title, thumbnail }: GridItemNoLiveProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        placeholder="blur"
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)