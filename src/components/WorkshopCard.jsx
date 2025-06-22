export default function WorkshopCard({title, domain, description, date}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-lg text-gray-600 font-bold">{title}</h3>
            <p className="text-sm text-gray-600 mb-1">{domain}</p>
            <p className="text-sm text-gray-500 mb-2">Date: {date}</p>
            <p className="text-sm text-gray-700 mb-4">{description}</p>
            <button
                className={`px-4 py-2 rounded text-white text-sm bg-blue-500 hover:bg-blue-600`}
            >
                {new Date(date) > new Date() ? 'Register' : 'View Details'}
            </button>
        </div>

    );
}