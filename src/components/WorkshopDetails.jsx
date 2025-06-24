import { motion, AnimatePresence } from "framer-motion";
export default function WorkshopDetails({ open, onClose, workshopTitle, WorkshopDetails }) {
    if (!open) return null;
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
                <motion.div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center"
                    
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    {/* <div > */}
                        <h2 className="text-xl text-gray-700 font-semibold mb-4">{workshopTitle}</h2>
                        <p className="text-gray-600 mb-6">{WorkshopDetails}</p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded text-sm text-gray-600 hover:bg-gray-100 mx-auto"
                        >
                            Close
                        </button>
                    {/* </div> */}
                </motion.div>
            </div>
        </AnimatePresence>


    );
}