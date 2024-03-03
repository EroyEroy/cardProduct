import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound404Page from "./pages/NotFound404Page";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/cardProduct" element={<DefaultLayout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App