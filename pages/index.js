import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Button,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a software engineer!
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

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I'm a passionate software engineer and CS alumnus with a deep
          enthusiasm for emerging technologies. I thrive on being at the
          forefront of innovation and have a track record of developing products
          that have reached tens of millions of users.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/work">
            <Button rightIcon={<ChevronRightIcon />}>Portfolio</Button>
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
