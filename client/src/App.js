import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Vote from './pages/Vote';
import Home from './pages/Home';
import GameDescription from './pages/GameDescription';
import GameOver from './pages/GameOver';
import './globals.css'

import styled from 'styled-components'

const StyledPage = styled.div`
  background: #363F51;
  color: #FFFFFF;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  font-family: 'Jost', sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () =>  {
  return (
    <StyledPage>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/game-description"  element={<GameDescription />} />
            <Route path="/game"  element={<Vote />} />
            <Route path="/game-over"  element={<GameOver />} />
          </Routes>
      </BrowserRouter>
      </StyledPage>
    );
}
export default App;
