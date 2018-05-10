import React from 'react'
import WhiteTheme from "../components/WhiteTheme";
import DarkTheme from "../components/DarkTheme";
import BlueTheme from "../components/BlueTheme";
import GithubShowcase from 'react-github-showcase';

const IndexPage = () => (
    <div>
        <div>
            <h1>Hi everyone!</h1>
            <p>Here's a collection of demos, showcasing our <a
                href="https://github.com/jangerhard/react-github-showcase#readme">React
                Github Showcase</a> component.</p>
        </div>
        <div>
            <h2>White Theme</h2>
            <WhiteTheme>
                <GithubShowcase username={"jangerhard"}
                                api_key={API_KEY}/>
            </WhiteTheme>
        </div>
        <div>
            <h2>Dark Theme</h2>
            <DarkTheme>
                <GithubShowcase username={"jangerhard"}
                                api_key={API_KEY}/>
            </DarkTheme>
        </div>
        <div>
            <h2>Blue Theme</h2>
            <BlueTheme>
                <GithubShowcase username={"jangerhard"}
                                api_key={API_KEY}/>
            </BlueTheme>
        </div>
    </div>
);

export default IndexPage;

export const API_KEY = process.env.GATSBY_GITHUB_API_KEY;