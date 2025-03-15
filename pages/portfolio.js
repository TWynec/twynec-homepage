import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  List,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import { IoLogoGithub } from "react-icons/io5";

const Portfolio = () => (
  <Container>
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title"></Heading>
      </Box>
    </Box>

    <Section delay={0.1}>
      <Heading as="h2" variant="page-title">
        Experience
      </Heading>

      <Heading as="h3" variant="section-title">
        Software Development Engineer I, Amazon
      </Heading>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Designing bots to gather data from across the internet in support of
        generative AI initiatives at Amazon
      </Box>
      <UnorderedList>
        <ListItem>
          Assisted in delivering a $100 million feature for the Alexa+ and Nova
          AI launches by parsing websites for targeted information
        </ListItem>
        <ListItem>
          Improved customer relations by designing tools to give content owners
          more control over how their data is used
        </ListItem>
      </UnorderedList>

      <Heading as="h3" variant="section-title">
        Software Development Engineer Intern, Amazon
      </Heading>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Built and maintained internal testing services for AI and Large Language
        Model development
      </Box>
      <UnorderedList>
        <ListItem>
          Designed and implemented a tool using Python to fine-tune Large
          Language Models (LLMs), which improved model accuracy and performance
          for Alexa
        </ListItem>
        <ListItem>
          Built an internal AI testing website using TypeScript that enabled
          tens of thousands of Machine Learning scientists to efficiently
          validate their models
        </ListItem>
      </UnorderedList>

      <Heading as="h3" variant="section-title">
        Software Development Engineer Intern, Amazon
      </Heading>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Created data insights that have a visible impact across Alexa’s AI
        systems, including personalized experiences on the front page of Alexa
        devices
      </Box>
      <UnorderedList>
        <ListItem>
          Developed a data service using Python and AWS that delivered
          personalized information to millions of Alexa users
        </ListItem>
        <ListItem>
          Led a long-term project aimed at improving Alexa’s Speech Recognition
          by increasing knowledge of trending names and terms
        </ListItem>
        <ListItem>
          Led the development on a long-term project which aimed to improve
          Alexa’s Speech Recognition by increasing knowledge of trending names
          and words
        </ListItem>
      </UnorderedList>
    </Section>

    <Section delay={0.3}>
      <Heading as="h2" variant="page-title">
        Projects
      </Heading>

      <Heading as="h3" variant="section-title">
        Directed Study - Predictive Keyboard
      </Heading>
      <List>
        <ListItem>
          <Link
            href="https://github.com/TWynec/Predictive-Keyboard"
            target="_blank"
          >
            <Button variant="ghost" leftIcon={<IoLogoGithub />}>
              Source Code
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          Worked alongside university faculty to create a digital keyboard with
          predictive and auto-correction capabilities, similar to those found on
          iPhone and Android. Utilized Java to organize and parse a database
          with half a million of the most popular English words scraped from
          around the internet.
        </ListItem>
      </List>

      <Heading as="h3" variant="section-title">
        Predicting Solar Flares with Data Mining
      </Heading>
      <List>
        <ListItem>
          <Link
            href="https://github.com/ddalton-jpl/flare-prediction-project"
            target="_blank"
          >
            <Button variant="ghost" leftIcon={<IoLogoGithub />}>
              Source Code
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          Collaborated with a team of students to predict when a solar flare is
          likely to occur through the use of machine learning and data mining.
          Cleaned, pre-processed, and transformed data gathered from the web to
          create analysis reports. Used Python to train multiple machine
          learning models on the final data sets.
        </ListItem>
      </List>

      <Heading as="h3" variant="section-title">
        Directed Study - Automatic Grading System
      </Heading>
      <List>
        <ListItem>
          <Link
            href="https://github.com/TWynec/Research-Facility"
            target="_blank"
          >
            <Button variant="ghost" leftIcon={<IoLogoGithub />}>
              Source Code
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          Overhauled Eastern Washington University’s grading tools for the
          Computer Science department by using Java and PHP to deploy an AWS
          server that automatically grades each student’s programming homework.
          This system has vastly reduced the workload for TA’s by allowing them
          to simply upload a zip file containing each student’s submission, with
          the program displaying their final score. It is currently being used
          to administer the Advancement Programming Exam to all of their CS
          Students.
        </ListItem>
      </List>
    </Section>

    <Section delay={0.5}>
      <Heading as="h2" variant="page-title">
        Education
      </Heading>
      <Heading as="h3" variant="section-title">
        Eastern Washington University
      </Heading>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Bachelor of Computer Science, 3.96 GPA
      </Box>
      <List>
        <ListItem>Graduated Summa Cum Laude.</ListItem>
        <ListItem>
          Built a strong foundation in Computer Science and Mathematics. Worked
          on research projects with faculty, contributing to the development of
          tools for the university like automatic grading systems. Consistently
          recognized on the Dean's List for academic excellence and commitment
          to high-quality work.
        </ListItem>
      </List>
    </Section>

    <Section delay={0.7}>
      <Heading as="h2" variant="page-title">
        Skills
      </Heading>
      <Heading as="h3" variant="section-title">
        Technical Skills
      </Heading>
      <UnorderedList>
        <ListItem>Python</ListItem>
        <ListItem>Java</ListItem>
        <ListItem>Data Structures and Algorithms</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>AWS</ListItem>
      </UnorderedList>
      <Heading as="h3" variant="section-title">
        Areas of Experience
      </Heading>
      <UnorderedList>
        <ListItem>Full Stack Development</ListItem>
        <ListItem>Backend Development</ListItem>
        <ListItem>Data Mining</ListItem>
        <ListItem>Machine Learning </ListItem>
      </UnorderedList>
    </Section>
  </Container>
);

export default Portfolio;
