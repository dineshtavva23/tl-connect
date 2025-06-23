import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white shadow-md mt-10">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                    <p>© {new Date().getFullYear()} TL Connect, Tinkerers' Lab, IITH</p>
                    <div className='flex items-center space-x-6 mt-3 mx-auto'>
                        <a href="https://github.com/dineshtavva23/tl-connect" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:tl@campus.iith.ac.in" className="text-gray-700 hover:text-black text-xl">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:scale-105">About</a>
                    <a href="#" className="hover:scale-105">Contact</a>
                    <a href="#" className="hover:scale-105">Privacy</a>
                </div>
            </div>
        </footer>

    );
}