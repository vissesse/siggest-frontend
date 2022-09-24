import { Outlet } from "react-router-dom"; 
import { Docentes } from "../../data/data"; 

export function DocenteIndex() {
    let docentes = []
    for (let i = 0; i < 8; i++) {
        docentes.push(Docentes[i]);
    }
    return (
        <div className="flex gap-4">
            <Outlet />
        </div>
    )

}