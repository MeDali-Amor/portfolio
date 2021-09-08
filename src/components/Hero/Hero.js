import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main>
                Welcome To <br />
                My Humble Portfolio
            </SectionTitle>
            <SectionText>
                I am Mohamed Ali Amor, a Full-Stack developper, currently
                focusing on web development with React and Node and MongoDB, and
                also exploring other languages and frameworks, because I am on a
                continuous learning journey that never ends.
            </SectionText>
            <Button onClick={() => (window.location = "#about")}>
                Learn More
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
