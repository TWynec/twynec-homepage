import { Container, Box, Heading } from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Section from "../components/section";

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
      </Section>
    </Container>
  );
};

export default Page;
