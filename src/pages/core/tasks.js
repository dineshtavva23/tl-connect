import Navbar from "@/components/CoreNavbar";
import Footer from "@/components/Footer";
import { useState, useEffect, use } from "react";
import tasksData from "@/data/coreTasks.json";
import { motion } from "framer-motion";

export default function Tasks() {
    const currentCoreDomain = "Design";
    const [myTasks, setMyTasks] = useState([]);
    useEffect(() => {
        const domainTasks = tasksData.filter(
            (task) => task.assignedTo === currentCoreDomain
        );
        setMyTasks(domainTasks);
    }, []);
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">
                    Tasks for {currentCoreDomain}
                </h1>
                <motion.div
                    className="bg-gray-200 "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {myTasks.length === 0 ? (
                        <p className="text-gray-500">No tasks assigned to your team.</p>
                    ) : (
                        <div className="space-y-4">
                            {myTasks.map((task) => (
                                <div key={task.id} className="bg-white p-4 rounded shadow">
                                    <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                                    <p className="text-sm text-gray-700 mb-1">{task.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>


            <Footer />

        </div>

    );
}