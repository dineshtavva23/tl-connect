import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkshopCard from "@/components/WorkshopCard";
import workshopsData from "@/data/workshops.json"
import { useState } from "react";


export default function Workshops() {
    const [ filter,setFilter]=useState("upcoming");
    const filteredWorkshops =workshopsData.filter(
        (workshop)=> workshop.status===filter
    );
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-600 mb-6">Workshops</h1>

                
                <div className="flex space-x-4 mb-6">
                    <button
                        onClick={() => setFilter("upcoming")}
                        className={`px-4 py-2 rounded ${filter === "upcoming" ? "bg-blue-500 text-white" : "bg-white border"
                            }`}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setFilter("past")}
                        className={`px-4 py-2 rounded ${filter === "past" ? "bg-blue-500 text-white" : "bg-white border"
                            }`}
                    >
                        Past
                    </button>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredWorkshops.map((workshop, i) => (
                        <WorkshopCard
                            key={i}
                            {...workshop} 
                        />
                    ))}
                </div>
            </div>


            <Footer />
        </div>
    )
}