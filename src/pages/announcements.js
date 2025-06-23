import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementCard from "@/components/AnnouncementCard";
import announcements from "@/data/announcements.json";

export default function Announcements() {
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-2xl text-gray-600 font-bold mb-6">Announcements</h1>

                <div className="space-y-4">
                    {announcements
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((item) => (
                            <AnnouncementCard key={item.id} {...item} />
                        ))}
                </div>
            </div>

            <Footer />
        </div>

    );
}