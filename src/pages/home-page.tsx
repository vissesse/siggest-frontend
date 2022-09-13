
import { Outlet } from "react-router-dom" 
import { Header } from "../components/header/header"
import { SideBar } from "../components/sidebar/sidebar"

export function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <SideBar />
                <div className="w-full flex flex-col gap-4 pl-5 pb-5 pt-8 bg-zinc-700">
                    {//work space

                    }
                    <Outlet />
                </div >
            </main>
        </div>
    )
}