import "./global.css"
import Image from 'next/image'
import Link from "next/link";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="body">
                    <div className='site-header'>
                        <Link href={'/'}> <Image  alt='logo' width={90} height={60} src='/MYTH-LOGO-2048x1386.png' loading="eager"/> </Link>
                        <h1 className="site-title">MYTH ARCHIVES</h1>
                    </div>
            {children}
            </body>
        </html>
    );
};