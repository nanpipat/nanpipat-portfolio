import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import NextLink from "next/link";
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
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoGoogle,
} from "react-icons/io5";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ExpSection, ExpCompany, ExpYear } from "../components/exp";
import ExperienceSection from "../components/section/experience";
import ProjectsSection from "../components/section/projects";
import ProfileImg from "../public/images/profile.jpg";
import VoxelRobotLoader from "../components/voxel-robot-loader";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={`${styles.main} ${inter.className}`}>
//         <div className={styles.description}>
//           <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>src/pages/index.tsx</code>
//           </p>
//           <div>
//             <a
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{' '}
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className={styles.vercelLogo}
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>

//         <div className={styles.center}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//         </div>

//         <div className={styles.grid}>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2>
//               Docs <span>-&gt;</span>
//             </h2>
//             <p>
//               Find in-depth information about Next.js features and&nbsp;API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2>
//               Learn <span>-&gt;</span>
//             </h2>
//             <p>
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2>
//               Templates <span>-&gt;</span>
//             </h2>
//             <p>
//               Discover and deploy boilerplate example Next.js&nbsp;projects.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2>
//               Deploy <span>-&gt;</span>
//             </h2>
//             <p>
//               Instantly deploy your Next.js site to a shareable URL
//               with&nbsp;Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//     </>
//   )
// }

export default function Page() {
  return (
    <Container maxWidth="100%">
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a software developer. and you can call me
        &quot;Top&quot; ♥
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nanpipat Klinpratoom
          </Heading>
          <p>Full Stack Developer. </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            src="/images/profile.jpg"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            alt="profile"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Text>
          I am a software developer with a vast array of knowledge in many
          different front-end and back-end languages, responsive frameworks,
          databases, and best code practices.
        </Text>
        <Box textAlign="center" my={4}>
          <Link href="/doc/resume.pdf">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Dowload CV
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <ExperienceSection />
      </Section>
      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <ProjectsSection />
      </Section> */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Know me more & Coding styles
        </Heading>
        <ProjectsSection />
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Image src="/images/cartoon.jpg" width={220} margin={7} />
        <Text ml={7}>love to play music.</Text>
        <Text ml={7}>love to watch the concerts.</Text>
        <Text ml={7}>and love to watch someone music performance.</Text>
        <Text ml={7}>music is my life.</Text>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nanpipat" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @nanpipat
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/nanpipat-klinpratoom-b859361bb/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @nanpipat-klinpratoom
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@nanpipat.k" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoMedium} />}
              >
                @nanpipat.k
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:nanpipat.k.dev@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGoogle} />}
              >
                nanpipat.k.dev@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}
