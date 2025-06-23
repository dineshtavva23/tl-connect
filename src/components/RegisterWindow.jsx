export default function RegisterWindow({ open, onClose, workshopTitle }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl text-gray-700 font-semibold mb-4">Register for {workshopTitle}</h2>
                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Registered! 🚀");
                        onClose();
                    }}
                >
                    <div>
                        <label className="block text-gray-400 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full text-black p-2 rounded border"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full text-black p-2 rounded border"
                            placeholder="e.g. 9876543210"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full text-black p-2 rounded border"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded text-sm text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 text-sm"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}