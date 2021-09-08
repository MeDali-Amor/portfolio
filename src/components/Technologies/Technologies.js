import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="technologies">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            i've worked with a range of technologies in the web developement
            world. From Backend to Frontend
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        <span
                            style={{
                                marginRight: 10,
                            }}
                        >
                            {" "}
                            React.js{" "}
                        </span>
                        <span
                            style={{
                                marginRight: 10,
                            }}
                        >
                            Next.js
                        </span>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        <span
                            style={{
                                marginRight: 10,
                            }}
                        >
                            {" "}
                            Node
                        </span>
                        <span
                            style={{
                                marginRight: 10,
                            }}
                        >
                            Express
                        </span>
                        <span
                            style={{
                                marginRight: 10,
                            }}
                        >
                            MongoDB
                        </span>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
