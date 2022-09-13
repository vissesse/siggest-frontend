import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Destaque } from "./pages/Destaque";
import { DocenteDestaque } from "./pages/destaque/DocenteDestaque";
import { DocentePage } from "./pages/Docente-page";
import { HomePage } from "./pages/home-page";
import { ProjectPage } from "./pages/project-page";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<Destaque />} />
                    <Route path="/destaque" element={<Destaque />}>
                        <Route index element={<DocenteDestaque />} />
                        <Route path="docente" element={<DocenteDestaque />} />
                        <Route path="project" element={<ProjectPage />} />
                    </Route>
                    <Route path="/docente" element={<DocentePage />} />
                    <Route path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    )
}