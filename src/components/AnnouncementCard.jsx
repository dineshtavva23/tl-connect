import { motion } from "framer-motion";
export default function AnnouncementCard({ title, date, message, tag }) {
  const tagColors = {
    Important: "bg-yellow-100 text-yellow-800",
    Info: "bg-blue-100 text-blue-800",
    Critical: "bg-red-100 text-red-800"
  };

  return (
    <motion.div
      className="bg-gray-200 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-white rounded-lg shadow p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg text-gray-500 font-bold">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${tagColors[tag] || 'bg-gray-100 text-gray-800'}`}>
            {tag}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{message}</p>
        <p className="text-xs text-gray-400">Posted on: {date}</p>
      </div>
    </motion.div>
  );
}
