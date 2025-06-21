export default function Card({title,children}){
    return(
        <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-lg font-bold mb-3 text-black">{title}</h2>
            <div className="text-gray-700 text-sm">{children}</div>
        </div>
    );

}