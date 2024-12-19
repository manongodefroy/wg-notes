import React from "react";
import HelpScout from "@helpscout/javascript-sdk";
import { DefaultStyle, Heading, useSetAppHeight } from "@helpscout/ui-kit";
import { useEffect, useState } from "react";

function App() {
  const appRef = useSetAppHeight();
  const [userFirstName, setUserFirstName] = useState("there");
  useEffect(() => {
    HelpScout.getApplicationContext().then(({ user }) =>
      setUserFirstName(user?.firstName || "there")
    );
  }, []);
  return (
    <div className="App" ref={appRef}>
      <DefaultStyle />
      <Heading level="h1">Hi {userFirstName}! 👋</Heading>
    </div>
  );
}

export default App;
