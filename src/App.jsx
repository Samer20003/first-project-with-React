import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./Component/Header/Header.jsx";
import CoreConcept from "./Component/CoreConcept.jsx";
import TabButton from "./Component/TapButton.jsx";
import { EXAMPLES } from "./data-with-examples.js";
function App() {
  // it is a javascript file that use non-standard javaScript syntax
  // jsx it is a {JavaScript Sybtax Extension} which is used to describe and create HTML elemnts in JavaScript in a declarative way
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContaent='Please click a button'
  function handleSelect(selectedButton) {
    // selecetedButton => 'Component' , 'JSX' ,  'Props', 'State'
    setSelectedTopic(selectedButton);
  }
  // Rendiring Content Conditionally
  let tapContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tapContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => (
              <CoreConcept key={coreConcept.title} {...coreConcept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              {" "}
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              {" "}
              Props{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              {" "}
              State{" "}
            </TabButton>
          </menu>
          {tapContent}
        </section>
      </main>
    </div>
  );
}

export default App;
