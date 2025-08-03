import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps){
    return (
        <div className="realative flex min-h-screen flex-col dark">
            <Header/>
            <main className="flex-1 flex flex-col mb-12 bg-black">
                {children}
            </main>
            <Footer/>
        </div>
    );
}