import React, { useState, useEffect } from "react";
import { Text, Textbar, WelcomeComponent } from "./welcomeElements";

import Typewriter from "typewriter-effect";
import GlitchClip from "react-glitch-effect/core/GlitchClip";

const Welcome = () => {
  const [visible, setVisibility] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(false);
    }, 2000);

    setTimeout(() => {
      setDisplay(false);
    }, 3500);
  }, []);

  return (
    <>
      <WelcomeComponent display={display} visible={visible}>
        <Textbar>
          <Text>
            <GlitchClip duration="1000">
              <Typewriter
                options={{
                  strings: ["Hello"],
                  autoStart: true,
                  loop: true,
                  pauseFor: "1500",
                  cursorClassName: "cursorType",
                }}
              />
            </GlitchClip>
          </Text>
        </Textbar>
      </WelcomeComponent>
    </>
  );
};

export default Welcome;
