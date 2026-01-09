import Header from "./components/Header";

/**
 * Root application component that renders the top-level layout with a decorative pattern and the Header inside a wrapper.
 *
 * @returns {JSX.Element} The top-level JSX layout for the application.
 */
export default function App() {
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <Header />
      </div>
    </main>
  );
}