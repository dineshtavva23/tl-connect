export default function TaskCard({ title, priority, status, due_date, description }) {
  const statusColors = {
    "Pending": "bg-yellow-100 text-yellow-800",
    "In Progress": "bg-blue-100 text-blue-800",
    "Completed": "bg-green-100 text-green-800"
  };

  return (
    <div className="p-5 rounded-2xl shadow-sm bg-white border hover:shadow-md transition duration-300">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span className="font-medium">Priority: <span className="text-gray-700">{priority}</span></span>
        <span>Due: {due_date}</span>
      </div>
    </div>
  );
}
