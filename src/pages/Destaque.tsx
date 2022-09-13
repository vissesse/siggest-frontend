import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";

export function Destaque() {
    return (
        <>
            <div className="w-full gap-4 flex h-[80%]">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}