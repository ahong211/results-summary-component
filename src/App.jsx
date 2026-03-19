import "./App.css";
import ResultsOverview from "./components/ResultsOverview/ResultsOverview";
import SummaryItem from "./components/SummaryItem/SummaryItem";
import { data } from "./data.js";
import Button from "./components/Button/Button.jsx";

function App() {
  return (
    <main>
      <ResultsOverview />
      <section className="summarySection">
        <h2>Summary</h2>
        <div className="summaryList">
          {data.map(({ category, score, icon }) => (
            <SummaryItem
              key={category}
              category={category}
              score={score}
              icon={icon}
            />
          ))}
        </div>
        <Button>Continue</Button>
      </section>
    </main>
  );
}

export default App;
