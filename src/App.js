import AuthProvider from "./Components/Context/AuthContext";
import MainLayout from "./Components/MainLayout";
import Router from "./Components/router";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <MainLayout>
          <Router />
        </MainLayout>
      </AuthProvider>
    </div>
  );
}

export default App;
