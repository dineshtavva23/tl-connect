import { motion } from "framer-motion";
export default function Card({ title, children }) {
    return (
        <motion.div
            className="bg-gray-200 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="bg-white rounded-xl shadow-md p-5 hover:scale-102">
                <h2 className="text-lg font-bold mb-3 text-black">{title}</h2>
                <div className="text-gray-700 text-sm">{children}</div>
            </div>
        </motion.div>
    );

}