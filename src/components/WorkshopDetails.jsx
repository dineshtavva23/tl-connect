export default function WorkshopDetails({ open, onClose, workshopTitle, WorkshopDetails }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
                <h2 className="text-xl text-gray-700 font-semibold mb-4">{workshopTitle}</h2>
                <p className="text-gray-600 mb-6">{WorkshopDetails}</p>
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded text-sm text-gray-600 hover:bg-gray-100 mx-auto"
                >
                    Close
                </button>
            </div>
        </div>


    );
}