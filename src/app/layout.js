import "./global.css"
import Image from 'next/image'
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="body">
                <div className='site-header'>
                <Image alt='logo' width={150} height={100} src='/MYTH-LOGO-2048x1386.png' className='logo' loading="eager"/>
            </div>
                {children}
            </body>
        </html>
    );
};