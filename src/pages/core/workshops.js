import Navbar from "@/components/CoreNavbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import workshopsData from "@/data/workshops.json";
import WorkshopCard from "@/components/WorkshopCard";
import { v4 as uuid } from "uuid";

export default function Workshops() {
    const [workshops, setWorkshops] = useState(workshopsData);
    const [form, setForm] = useState({
        title: "",
        domain: "",
        description: "",
        date: "",
        status: "upcoming"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWorkshop = {
            ...form,
            id: uuid()
        };

        setWorkshops([newWorkshop, ...workshops]);
        alert("Workshop added");

        setForm({
            title: "",
            domain: "",
            description: "",
            date: "",
            status: "upcoming"
        });
    };

    const handleDelete = (id) => {
        setWorkshops(workshops.filter((w) => w.id !== id));
    };
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-600 mb-6">Manage Workshops</h1>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Workshop Title"
                            className=" text-black border p-2 rounded"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Domain"
                            className=" text-black border p-2 rounded"
                            value={form.domain}
                            onChange={(e) => setForm({ ...form, domain: e.target.value })}
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Description"
                        className="w-full  text-black border p-2 rounded"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        required
                    ></textarea>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <input
                            type="date"
                            className=" text-gray-700 border p-2 rounded"
                            value={form.date}
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                            required
                        />
                        {/* <select
                            className=" text-gray-700 border p-2 rounded"
                            value={form.status}
                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                        >
                            <option value="upcoming">Upcoming</option>
                            <option value="past">Past</option>
                        </select> */}
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Add Workshop
                        </button>
                    </div>
                </form>

        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workshops.map((w) => (
                        <div key={w.id} className="relative">
                            <WorkshopCard {...w} />

                            
                            <button
                                onClick={() => handleDelete(w.id)}
                                className="absolute top-2 right-2 bg-red-100 text-red-600 hover:bg-red-200 text-xs px-2 py-1 rounded shadow"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            <Footer />
        </div >


    );

}