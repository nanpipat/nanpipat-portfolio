import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    GridItem,
    Grid,
    Text,
    Flex,
    useColorModeValue
} from '@chakra-ui/react'
const ExperienceSection = () => {
    return (
        <>
            <Grid my={4} templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={[2, 1, 1]}>
                    <Text fontWeight="bold" mr={2}>
                        Finema
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        Lead Software Engineer
                    </Text>
                    <Text fontSize="smaller" color="gray.500">
                        (2025 - Present)
                    </Text>
                </GridItem>
                <GridItem colSpan={[3, 4, 4]}>
                    <Text>
                        Leading development and infrastructure initiatives for decentralized identity and government-related platforms.
                        Architecting back-end systems using Golang, managing cloud infrastructure on AWS and Kubernetes,
                        and implementing CI/CD pipelines with observability stacks.
                    </Text>
                </GridItem>
            </Grid>
            <Grid my={4} templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={[2, 1, 1]}>
                    <Text fontWeight="bold" mr={2}>
                        True Digital Group
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        Senior Associate Software Engineer
                    </Text>
                    <Text fontSize="smaller" color="gray.500">
                        (2024 - 2025)
                    </Text>
                </GridItem>
                <GridItem colSpan={[3, 4, 4]}>
                    <Text>
                        Developed and maintained web applications, web APIs, and projects related to government and decentralized identity platforms.
                        Participated in designing high availability system architecture and collaborating with cross-functional teams.
                    </Text>
                </GridItem>
            </Grid>
            <Grid my={4} templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={[2, 1, 1]}>
                    <Text fontWeight="bold" mr={2}>
                        Finema
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        Senior Software Engineer
                    </Text>
                    <Text fontSize="smaller" color="gray.500">
                        (2022 - 2024)
                    </Text>
                </GridItem>
                <GridItem colSpan={[3, 4, 4]}>
                    <Text>
                        Implemented back-end systems using Golang with best-practice architecture.
                        Designed and managed PostgreSQL/MySQL databases. Orchestrated deployments using Kubernetes and Docker.
                        Drove adoption of Agile/Scrum methodologies and provided technical coaching to team members.
                    </Text>
                </GridItem>
            </Grid>
            <Grid my={4} templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={[2, 1, 1]}>
                    <Text fontWeight="bold" mr={2}>
                        Studio Craftsmanship
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        Full Stack Developer
                    </Text>
                    <Text fontSize="smaller" color="gray.500">
                        (2021 - 2022)
                    </Text>
                </GridItem>
                <GridItem colSpan={[3, 4, 4]}>
                    <Text>
                        Contributed to the development of e-commerce web applications. Developed front-end using React (Next.js)
                        and implemented back-end systems using Go (Fiber) with hexagonal architecture.
                        Managed PostgreSQL databases and AWS infrastructure in an Agile/Scrum environment.
                    </Text>
                </GridItem>
            </Grid>
            <Grid my={4} templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={[2, 1, 1]}>
                    <Text fontWeight="bold" mr={2}>
                        Net Cube Soft
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        Full Stack Developer
                    </Text>
                    <Text fontSize="smaller" color="gray.500">
                        (2018 - 2021)
                    </Text>
                </GridItem>
                <GridItem colSpan={[3, 4, 4]}>
                    <Text>
                        Mid-level developer focused on software development and team mentoring.
                        Developed websites and applications using C#, .NET Core, .NET Framework, and Angular.
                        Provided technical guidance to junior developers and introduced new technologies to improve project efficiency.
                    </Text>
                </GridItem>
            </Grid>
        </>
    )
}

export default ExperienceSection