import Navbar from "@/components/HeadNavbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import announcementsData from "@/data/announcements.json";
import AnnouncementCard from "@/components/AnnouncementCard";
export default function Announcements() {
    const [announcements, setAnnouncements] = useState(announcementsData);
    const [form, setForm] = useState({ title: "", message: "", tag: "Info" });
    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            ...form,
            date: new Date().toISOString().split("T")[0]
        };

        setAnnouncements([newPost, ...announcements]);
        alert("Announcement posted");

        setForm({ title: "", message: "", tag: "Info" });
    };


    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-2xl text-gray-600 font-bold mb-6">Post Announcement</h1>

                {/* 📝 Form to Post Announcement */}
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md mb-8">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Title</label>
                        <input
                            type="text"
                            className="w-full border text-gray-700 p-2 rounded"
                            placeholder="e.g. Maintenance Alert"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Message</label>
                        <textarea
                            className="w-full border text-gray-700 p-2 rounded"
                            placeholder="Announcement message..."
                            rows="3"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Tag</label>
                        <select
                            className="w-full border text-gray-700 p-2 rounded"
                            value={form.tag}
                            onChange={(e) => setForm({ ...form, tag: e.target.value })}
                        >
                            <option value="Info">Info</option>
                            <option value="Important">Important</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Post Announcement
                        </button>
                    </div>
                    <h2 className="text-xl text-gray-600 font-semibold mb-4">All Announcements</h2>
                    <div className="space-y-4">
                        {announcements
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((item) => (
                                <AnnouncementCard key={item.id} {...item} />
                            ))}
                    </div>
                </form>
            </div>

            <Footer />
        </div>

    );
}