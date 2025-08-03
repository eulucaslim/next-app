import Link from "next/link";
import Image from "next/image";

export function Footer(){
    return (
        <footer className="border-t border-white/10 bg-black ">
            <div className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-black ">
                <div className="flex justify-between md:flex-row gap-8 py-8">
                    <Link href='/'>
                        <Image 
                            src="/logo.svg"
                            alt="Logo Site"
                            width={116}
                            height={32}
                        />
                    </Link>
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                        <Link href="/termos-de-uso" className="hover:text-primary">Termos de Uso</Link>
                        <Link href="/politica-de-privacidade" className="hover:text-primary">Política de Privacidade</Link>
                        <Link href="/feedbacl" className="hover:text-primary">Feedbackl</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}