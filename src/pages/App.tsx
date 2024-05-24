// import { useState } from 'react'
import Button from '../components/Button';
import paper from '../public/paper.mp4'
import { ROCK, PAPER, SCISSORS } from '../scripts/constants';
import { GetRandomAction } from '../scripts/game';

const App = () => {
  const videoEl = document.querySelector("video");
  console.log(videoEl);

  const action = GetRandomAction();
  console.log(action);

  return (
    <>
      <h1 className="text-center">Blue Archive RPS</h1>
      <main className="p-5 w-full h-screen items-center justify-center text-center">
        <video className="mx-auto rounded-lg md:aspect-video md:w-[70%] w-full aspect-[9/16]">
          <source src={paper} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Button role={ROCK} />
        <Button role={PAPER} />
        <Button role={SCISSORS} />
      </main>
    </>
  )
}

export default App
