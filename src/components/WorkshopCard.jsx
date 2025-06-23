import RegisterWindow from "./RegisterWindow";
import WorkshopDetails from "./WorkshopDetails";
import { motion } from "framer-motion";
import { useState } from "react";
export default function WorkshopCard({ title, domain, description, date, details }) {
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const isUpcoming = new Date(date) > new Date();
    return (
        <motion.div
            className="bg-gray-200 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="text-lg text-gray-600 font-bold">{title}</h3>
                <p className="text-sm text-gray-600 mb-1">{domain}</p>
                <p className="text-sm text-gray-500 mb-2">Date: {date}</p>
                <p className="text-sm text-gray-700 mb-4">{description}</p>
                <button
                    className={`px-4 py-2 rounded text-white text-sm bg-blue-500 hover:bg-blue-600`}
                    onClick={() => isUpcoming ? setIsOpenRegister(true) : setIsOpenDetails(true)}

                >
                    {isUpcoming ? 'Register' : 'View Details'}
                </button>


                <RegisterWindow
                    open={isOpenRegister}
                    onClose={() => setIsOpenRegister(false)}
                    workshopTitle={title}
                />
                <WorkshopDetails
                    open={isOpenDetails}
                    onClose={() => setIsOpenDetails(false)}
                    workshopTitle={title}
                    WorkshopDetails={details}



                />


            </div>
        </motion.div>


    );
}