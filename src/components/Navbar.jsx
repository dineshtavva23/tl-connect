import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="bg-white shadow-md p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-black">
                    TL connect
                </h1>
                <div className="space-x-4 text-black">
                    <Link href='/dashboard' className="hover:underline">Dashboard</Link>
                    <Link href='/workshops' className="hover:underline">Workshops</Link>
                    <Link href='/tasks' className="hover:underline">Tasks</Link>
                    <Link href='/announcements' className="hover:underline">Announcemnets</Link>
                </div>
            </div>
            
        </nav>
    );
}