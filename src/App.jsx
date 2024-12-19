import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { AboutMe } from "./pages/AboutMe";
import { ContactMe } from "./pages/ContactMe";
import { Projects } from "./pages/Projects";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contact-me" element={<ContactMe />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
