import { Container, Box, Heading } from "@chakra-ui/react";
import Section from "../components/section";

const Page = () => {
  return (
    <Container>
      <Box borderRadius={"lg"} bg="red" p={3} mb={6} textAlign="center">
        Hello, I'm a software engineer!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Trace Wynecoop
          </Heading>
          <p>Software Engineer ( Backend, Machine Learning )</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
      </Section>
    </Container>
  );
};

export default Page;
