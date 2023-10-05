import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Link } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail,demo,code }) => (
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

        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
                <Link href={demo} target="_blank">
                    Live
                </Link>
            </div>
            <div>
                <Link href={code} target="_blank">
                    Code
                </Link>
            </div>
        </div>

    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
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

export const GridItemNoLive = ({ children, href, title, thumbnail,demo,code }) => (
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

        {/* <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
                <Link href={demo} target="_blank">
                    Live
                </Link>
            </div>
        </div> */}

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