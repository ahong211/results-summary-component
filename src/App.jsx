import "./App.css";
import ResultsOverview from "./components/ResultsOverview/ResultsOverview";
import SummaryItem from "./components/SummaryItem/SummaryItem";

function App() {
  return (
    <main>
      <ResultsOverview />
      <section className="summarySection">
        <h2>Summary</h2>
        <SummaryItem />
      </section>
    </main>
  );
}

export default App;
