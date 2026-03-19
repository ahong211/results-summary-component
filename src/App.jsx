import "./App.css";
import ResultsOverview from "./components/ResultsOverview/ResultsOverview";
import SummaryItem from "./components/SummaryItem/SummaryItem";
import { data } from "./data.js";

function App() {
  return (
    <main>
      <ResultsOverview />
      <section className="summarySection">
        <h2>Summary</h2>
        {data.map(({ category, score, icon }) => (
          <SummaryItem
            key={category}
            category={category}
            score={score}
            icon={icon}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
