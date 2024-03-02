import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <>
        <Router>
            <DefaultLayout>
            <Routes>
                <Route path={'/'} element={ <Home/> } />
                <Route path={'/contact-us'} element={ <ContactUs/> } />
            </Routes>
            </DefaultLayout>
        </Router>
    </>
  )
}

export default App
