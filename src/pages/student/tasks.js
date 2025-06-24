import Navbar from "@/components/StudentNavbar";
import Footer from "@/components/Footer";
import tasks from "@/data/tasks.json";
import TaskCard from "@/components/TaskCard"
import { useState } from "react";

export default function Tasks() {
    const [filter, setFilter] = useState('In Progress');
    const filteredTasks = tasks.filter(
        (task) => task.status === filter
    );
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-600 mb-6">Tasks</h1>
                <div className="flex space-x-4 mb-6 text">
                    <button
                        onClick={() => setFilter("In Progress")}
                        className={`px-4 py-2 rounded ${filter === "In Progress" ? "bg-blue-500 text-white" : "bg-white text-gray-600 "
                            }`}
                    >
                        In Progress
                    </button>
                    <button
                        onClick={() => setFilter("Pending")}
                        className={`px-4 py-2 rounded ${filter === "Pending" ? "bg-blue-500 text-white" : "bg-white text-gray-600"
                            }`}
                    >
                        Pending
                    </button>
                    <button
                        onClick={() => setFilter("Completed")}
                        className={`px-4 py-2 rounded ${filter === "Completed" ? "bg-blue-500 text-white" : "bg-white text-gray-600"
                            }`}
                    >
                        Completed
                    </button>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTasks.map((task, i) => (
                        <TaskCard key={i} {...task} />
                    ))}
                </div>


            </div>
            <Footer />
        </div>

    );
}
