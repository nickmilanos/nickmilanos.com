import React from 'react';

export const Portfolio = () => {
    return(
                    <div id="portfolio">
                <h1>Portfolio</h1>
                <div id="inner_portfolio">
                    <div id="todoWrap" class="projectWraps">
                        <h4>ToDo List</h4>
                        <div id="todoList" class="projects">
                            <h4>HTML CSS Javascript</h4>
                        </div>
                        <a href="https://nickmilanos.github.io/TODO-List/" target="_blank">Demo Link</a><br />
                        <a href="https://github.com/nickmilanos/TODO-List" target="_blank">Github Link</a>
                    </div>
                    <div id="memoryGameWrap" class="projectWraps">
                        <h4>Memory Game</h4>
                        <div id="memoryGame" class="projects">
                            <h4>C# OOP</h4>
                        </div>
                        <a href="https://github.com/nickmilanos/Memory-Game" target="_blank">Github Link</a>
                    </div>
                    <div id="colorGameWrap" class="projectWraps">
                        <h4>Color Game</h4>
                        <div id="colorGame" class="projects">
                            <h4>HTML CSS Javascript</h4>
                        </div>
                        <a href="https://nickmilanos.github.io/Color-Game/" target="_blank">Demo Link</a><br />
                        <a href="https://github.com/nickmilanos/Color-Game" target="_blank">Github Link</a>
                    </div>
                </div>
                <h4><i>You can find more of my work at my <a href="https://github.com/nickmilanos" target="_blank">Github Account</a></i></h4>
            </div>

    );
}