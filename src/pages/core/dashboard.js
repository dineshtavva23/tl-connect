import Navbar from "@/components/CoreNavbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-8 grid gap-6 grid-cols-1">
                <Card title="Manage Workshops">
                    <p className="text-sm text-gray-600 mb-2">Create, edit, or remove workshops.</p>
                    <button className="bg-indigo-600 text-white px-4 py-1 rounded text-sm hover:bg-indigo-700">Go to Workshops</button>
                </Card>

                <Card title="Assign Tasks">
                    <p className="text-sm text-gray-600 mb-2">Assign new tasks to members and track status.</p>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700">Go to Tasks</button>
                </Card>

                <Card title="Post Announcements">
                    <p className="text-sm text-gray-600 mb-2">Send info to all TL members.</p>
                    <button className="bg-pink-600 text-white px-4 py-1 rounded text-sm hover:bg-pink-700">Go to Announcements</button>
                </Card>
            </main>

            <Footer />
        </div>
    );
}