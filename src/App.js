import MainLayout from "./Components/MainLayout";
import Router from "./Components/router";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Router />
      </MainLayout>
    </div>
  );
}

export default App;
