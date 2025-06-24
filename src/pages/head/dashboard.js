import Navbar from "@/components/HeadNavbar";
import Footer from "@/components/Footer";

export default function Dashboard() {
    const headName = "Aditya Kumar";

    const allUsers = [
        { id: 1, name: "Sahana", role: "core", domain: "Design", email: "sahana@iith.ac.in" },
        { id: 2, name: "Praveen", role: "core", domain: "Web", email: "praveen@iith.ac.in" },
        { id: 3, name: "Akash", role: "student", domain: "Electronics", email: "akash@iith.ac.in" },
        { id: 4, name: "Shruti", role: "student", domain: "Design", email: "shruti@iith.ac.in" }
    ];

    const cores = allUsers.filter(u => u.role === "core");
    const students = allUsers.filter(u => u.role === "student");
    const totalTasks = 12;

    return (
        <div className="min-h-screen flex flex-col w-full bg-gray-200">
            <Navbar />

            <main className="flex-grow w-full">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold text-gray-700 mb-6">Welcome, {headName}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-4 rounded shadow text-center">
                            <h2 className="text-lg font-semibold text-gray-600">Total Cores</h2>
                            <p className="text-3xl font-bold text-indigo-600">{cores.length}</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow text-center">
                            <h2 className="text-lg font-semibold text-gray-600">Total Students</h2>
                            <p className="text-3xl font-bold text-blue-600">{students.length}</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow text-center">
                            <h2 className="text-lg font-semibold text-gray-600">Total Tasks</h2>
                            <p className="text-3xl font-bold text-green-600">{totalTasks}</p>
                        </div>
                    </div>

                    {/* <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Core Members</h2>
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="text-left p-2">Name</th>
                                    <th className="text-left p-2">Domain</th>
                                    <th className="text-left p-2">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cores.map((core) => (
                                    <tr key={core.id} className="text-gray-600">
                                        <td className="p-2">{core.name}</td>
                                        <td className="p-2">{core.domain}</td>
                                        <td className="p-2">{core.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                    
                </div>
            </main>

            <Footer />
        </div>
    );
}
