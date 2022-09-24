import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Destaque } from "./pages/Destaque";
import { DocenteDestaque } from "./pages/destaque/DocenteDestaque";
import { DocenteDestaqueDetail } from "./pages/destaque/DocenteDestaqueDetail";
import { DocenteIndex } from "./pages/docente";
import { DocenteListPage } from "./pages/docente/DocenteListPage";
import { DocenteFullDetail } from "./pages/docente/DoceteFullDetail";
import { ActividadesProfissionais } from "./pages/docente/information/ActividadeProfissionais";
import { ActividadesCientificas } from "./pages/docente/information/ActividadesCientificas";
import { Formacao } from "./pages/docente/information/Formacao";
import { Outros } from "./pages/docente/information/Outros";
import { Publicacoes } from "./pages/docente/information/Publicacoes";
import { HomePage } from "./pages/home-page";
import { ProjectIndex } from "./pages/project";
import { ProjectoDetailPage } from "./pages/project/ProjectDetailPage";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<Destaque />} />
                    <Route path="/destaque/" element={<Destaque />}>
                        <Route index element={<DocenteDestaque />} />
                        <Route path="docente/" element={<DocenteDestaque />} >
                            <Route index element={<DocenteDestaqueDetail />} />
                            <Route path=":id/" element={<DocenteDestaqueDetail />} />
                        </Route>
                    </Route>
                    <Route path="docente/" element={<DocenteIndex />} >
                        <Route index element={<DocenteListPage />} />
                        <Route path=":id/" element={<DocenteFullDetail />} >
                            <Route index element={<Formacao />} />
                            <Route path="formacao/" element={<Formacao />} />
                            <Route path="actividades-profissionais/" element={<ActividadesProfissionais />} />
                            <Route path="actividades-cientificas/" element={<ActividadesCientificas />} />
                            <Route path="publicacoes/" element={<Publicacoes />} />
                            <Route path="outros/" element={<Outros />} />
                        </Route>
                    </Route>
                    <Route path="project/" element={<Destaque />}>
                        <Route path="instic/" element={<ProjectIndex />} >
                            <Route index element={<ProjectoDetailPage />} />
                            <Route path=":projectoId/" element={<ProjectoDetailPage />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>} />
                </Route>
            </Routes>
        </Router>
    )
}