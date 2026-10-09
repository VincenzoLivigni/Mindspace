import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"
import Overview from "./pages/Overview"
import Inbox from "./pages/Inbox"
import Planner from "./pages/Planner"
import DailyReview from "./pages/DailyReview"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Overview />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/daily-review" element={<DailyReview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
