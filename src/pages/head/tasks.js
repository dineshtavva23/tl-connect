import Navbar from "@/components/HeadNavbar";
import Footer from "@/components/Footer";
import tasksData from "@/data/coreTasks.json";
import TaskCard from "@/components/TaskCard";

export default function Tasks() {

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">All Assigned Tasks</h1>

                {/* Grouped by Team */}
                {["Design", "Web", "Electronics"].map((team) => {
                    const teamTasks = tasksData.filter((t) => t.assignedTo === team);
                    return (
                        <div key={team} className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-600 mb-4">{team}</h2>

                            {teamTasks.length === 0 ? (
                                <p className="text-sm text-gray-500">No tasks assigned to this team.</p>
                            ) : (
                                <div className="space-y-4">
                                    {teamTasks.map((task) => (
                                        <TaskCard
                                            key={task.id}
                                            title={task.title}
                                            description={task.description}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <Footer />
        </div>

    );
}