// import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Router from "./routes/routes";
import AppProvider from "./hooks";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
