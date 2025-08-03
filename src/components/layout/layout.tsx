import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps){
    return (
        <div className="relative flex min-h-screen flex-col dark">
            <Header/>
            <main className="flex-1 flex flex-col bg-black">
                {children}
            </main>
            <Footer/>
        </div>
    );
}