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
            <h2>White Theme - <a href="https://github.com/jangerhard/react-github-showcase-demos/blob/master/src/components/WhiteTheme.js">Github</a>
            </h2>
            <WhiteTheme>
                <GithubShowcase username={"jangerhard"}
                                api_key={API_KEY}/>
            </WhiteTheme>
        </div>
        <br/>
        <hr/>
        <div>
            <h2>Dark Theme - <a href="https://github.com/jangerhard/react-github-showcase-demos/blob/master/src/components/DarkTheme.js">Github</a>
            </h2>
            <DarkTheme>
                <GithubShowcase username={"jangerhard"}
                                api_key={API_KEY}/>
            </DarkTheme>
        </div>
        <br/>
        <hr/>
        <div>
            <h2>Blue Theme - <a href="https://github.com/jangerhard/react-github-showcase-demos/blob/master/src/components/BlueTheme.js">Github</a>
            </h2>
            <BlueTheme>
                <GithubShowcase username={"jangerhard"}
                                api_key={API_KEY}/>
            </BlueTheme>
        </div>
    </div>
);

export default IndexPage;

export const API_KEY = process.env.GATSBY_GITHUB_API_KEY;