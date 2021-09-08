import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    Span,
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "15px",
                        marginLeft: 10,
                    }}
                >
                    <DiCssdeck size="3rem" />
                    <Span>Portfolio</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#technologies">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/MeDali-Amor" target="_blank">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
                href="https://www.linkedin.com/in/mohamed-ali-amor-145327146/"
                target="_blank"
            >
                <AiFillLinkedin size="3rem" />
            </SocialIcons>

            <SocialIcons
                href="https://www.facebook.com/medali.benamor/"
                target="_blank"
            >
                <AiFillFacebook size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
