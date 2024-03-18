import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  List,
  Link,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import { IoLogoGithub } from "react-icons/io5";
import Paragraph from "../components/paragraph";

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
        Software Development Engineer Intern, Amazon
      </Heading>
      <UnorderedList>
        <ListItem>
          Developed a prompt engineering tool using Python and TypeScript that
          enabled engineers to fine tune Large Language Models
        </ListItem>
        <ListItem>
          Deployed an AI testing ground to an EC2 instance using CloudFormation
          which enabled tens of thousands of Machine Learning scientists to
          interact with their models
        </ListItem>
        <ListItem>
          Developed an internal website to showcase and compare the latest AI
          models in the Alexa organization using AWS, Python, Typescript, and
          React
        </ListItem>
      </UnorderedList>
      <Heading as="h3" variant="section-title">
        Software Development Engineer Intern, Amazon
      </Heading>
      <UnorderedList>
        <ListItem>
          Developed a service using Python and AWS that provided personalized
          experiences for millions of Alexa users
        </ListItem>
        <ListItem>
          Used Python and Amazon’s web scraped data bases to automate an Alexa
          home card with thousands of data points per day, removing the need for
          human input
        </ListItem>
        <ListItem>
          Led the development on a long-term project which aimed to improve
          Alexa’s Speech Recognition by increasing knowledge of trending names
          and words
        </ListItem>
      </UnorderedList>
    </Section>

    <Section delay={0.1}>
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
        Research Facility Game
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
          Leading the development of a collaborative, procedurally generated
          horror game centered around escaping an aban- doned research facility.
          Utilizing Unreal Engine 5 and C++ to craft dynamic procedural levels
          and implement intricate gameplay systems. Currently spearheading solo
          development efforts with the goal of eventual release on the Steam
          platform.
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

    <Section delay={0.1}>
      <Heading as="h2" variant="page-title">
        Education
      </Heading>
      <Heading as="h3" variant="section-title">
        Eastern Washington University
      </Heading>
      <List>
        <ListItem>Bachelor of Computer Science, 3.96 GPA</ListItem>
        <ListItem>
          Graduated Summa Cum Laude. Studied Computer Science and Mathematics
          concepts ranging from Data Structures to Calculus. Participated in
          research alongside the amazing faculty to develop tools ranging from
          automatic grading systems to predictive keyboards. Repeatedly
          recognized by the Dean's List for work ethic and outstanding GPA.
        </ListItem>
      </List>
    </Section>

    <Section delay={0.1}>
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
        <ListItem>JavaScript</ListItem>
        <ListItem>C++</ListItem>
        <ListItem>C</ListItem>
        <ListItem>React</ListItem>
        <ListItem>AWS</ListItem>
      </UnorderedList>
      <Heading as="h3" variant="section-title">
        Areas of Experience
      </Heading>
      <UnorderedList>
        <ListItem>Full Stack Development</ListItem>
        <ListItem>Game Development</ListItem>
        <ListItem>Backend Development</ListItem>
        <ListItem>Data Mining</ListItem>
        <ListItem>Machine Learning </ListItem>
      </UnorderedList>
    </Section>
  </Container>
);

export default Portfolio;
