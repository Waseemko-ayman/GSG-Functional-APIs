import AuthProvider from "./Components/Context/AuthContext";
import { useThemeContext } from "./Components/Context/ThemeContext";
import MainLayout from "./Components/MainLayout";
import Router from "./Components/router";

function App() {
  const {theme} = useThemeContext();

  return (
    <div className={theme}>
      <AuthProvider>
        <MainLayout>
          <Router />
        </MainLayout>
      </AuthProvider>
    </div>
  );
}

export default App;
