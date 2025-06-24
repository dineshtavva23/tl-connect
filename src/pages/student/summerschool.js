import Navbar from "@/components/StudentNavbar";
import Footer from "@/components/Footer";
import schedule from "@/data/summerschool.json"

export default function Summerschool() {
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl text-gray-600 font-bold mb-6">Summer School Schedule</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-blue-100 text-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Topic</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Google Meet</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Resources</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {schedule.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="px-6 py-4">{item.topic}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href={item.meetLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:text-green-400"
                                            
                                        >
                                            Join
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 space-x-2">
                                        {item.resources.map((res, i) => (
                                            <a
                                                key={i}
                                                href={res.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-xs"
                                            >
                                                {res.label}
                                            </a>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />


        </div>

    );
}