import { useState } from "react";
import Navbar from "@/components/HeadNavbar";
import Footer from "@/components/Footer";
import cores from "@/data/cores.json";

export default function MembersPage() {
    const [filter, setFilter] = useState("All");


    const filteredCores = filter === "All"
        ? cores
        : cores.filter((core) => core.domain === filter);


    const domains = ["All", ...new Set(cores.map((c) => c.domain))];

    return (
        <div className="min-h-screen flex flex-col w-full bg-gray-200">
            <Navbar />
            <main className="flex-grow bg-gray-200">

                <div className="max-w-5xl mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold text-gray-700 mb-6">Core Members</h1>


                    <div className="flex flex-wrap gap-3 mb-6">
                        {domains.map((domain) => (
                            <button
                                key={domain}
                                onClick={() => setFilter(domain)}
                                className={`px-4 py-1 rounded border text-sm ${filter === domain
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-700"
                                    }`}
                            >
                                {domain}
                            </button>
                        ))}
                    </div>

                    {/* 📋 Core Table */}
                    {filteredCores.length === 0 ? (
                        <p className="text-gray-500">No core members in this domain.</p>
                    ) : (
                        <div className="bg-white p-4 rounded shadow">
                            <table className="w-full text-sm">
                                <thead className="text-gray-600 border-b">
                                    <tr>
                                        <th className="text-left p-2">Name</th>
                                        <th className="text-left p-2">Domain</th>
                                        <th className="text-left p-2">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCores.map((core) => (
                                        <tr key={core.id} className=" text-gray-600">
                                            <td className="p-2">{core.name}</td>
                                            <td className="p-2">{core.domain}</td>
                                            <td className="p-2">{core.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
