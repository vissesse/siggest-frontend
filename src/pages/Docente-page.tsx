import { ListDocente } from "../components/docente/ListDocente";
import { Docentes } from "../data/data";

export function DocentePage() {
    const docentes = Docentes
    return (
        <div>
            Docente
            <ListDocente docentes={docentes} />
        </div>
    )

}