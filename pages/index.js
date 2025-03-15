import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hey, I'm Trace, a Software Engineer at Amazon!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Trace Wynecoop
          </Heading>
          <Paragraph>
            Software Engineer ( Backend, Machine Learning, Fullstack )
          </Paragraph>
        </Box>
      </Box>

      <Box display="inline-block"></Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I’m a 3x Software Engineer in Amazon’s AI division, where I’ve worked
          on data services for the Alexa homepage and developing tools for Large
          Language Model (LLM) advancement. Currently, I’m building datasets to
          support AI/ML projects across Amazon, ensuring our models have access
          to high-quality, diverse data.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/portfolio">
            <Button
              rightIcon={<ChevronRightIcon />}
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            >
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/tracewynecoop/"
              target="_blank"
            >
              <Button variant="ghost" leftIcon={<IoLogoLinkedin />}>
                Trace Wynecoop
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/TWynec" target="_blank">
              <Button variant="ghost" leftIcon={<IoLogoGithub />}>
                @TWynec
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Page;
