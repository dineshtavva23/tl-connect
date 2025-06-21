import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 grid gap-6 grid-cols-1">
        
        <Card title="Upcoming Workshops">
          <ul className="space-y-4">
            <li>
              <p className="font-medium">Playing with Numbers</p>
              <p className="text-sm text-gray-600">Math-focused logic workshop to improve algorithmic thinking.</p>
            </li>
            <li>
              <p className="font-medium">Mechatronics</p>
              <p className="text-sm text-gray-600">Learn to integrate mechanical, electronic, and software systems.</p>
            </li>
            <li>
              <p className="font-medium">Robotics 101</p>
              <p className="text-sm text-gray-600">Basic intro to robotics using Arduino and servos.</p>
            </li>
          </ul>
        </Card>

        <Card title="Assigned Tasks">
          <ul className="space-y-4">
            <li>
              <p className="font-medium">Authenticated login page</p>
              <p className="text-sm text-gray-600">Design and implement role-based login using dropdown mock auth.</p>
            </li>
            <li>
              <p className="font-medium">Build and deploy a site!</p>
              <p className="text-sm text-gray-600">Complete frontend and host it using Vercel or Netlify.</p>
            </li>
            <li>
              <p className="font-medium">Design event poster</p>
              <p className="text-sm text-gray-600">Poster for the summer school welcome workshop.</p>
            </li>
          </ul>
        </Card>

        <Card title="Class Join Links">
          <ul className="space-y-4">
            <li>
              <a href="http://meet.google.com/kyu-ytjv-yao?hs=179&authuser=0" className="text-blue-600 font-medium underline">Session on React</a>
              <p className="text-sm text-gray-600">Understand component structure and hooks in React.</p>
            </li>
            <li>
              <a href="http://meet.google.com/kyu-ytjv-yao?hs=179&authuser=0" className="text-blue-600 font-medium underline">Session on Angular</a>
              <p className="text-sm text-gray-600">Get started with modules, templates, and services in Angular.</p>
            </li>
            <li>
              <a href="http://meet.google.com/kyu-ytjv-yao?hs=179&authuser=0" className="text-blue-600 font-medium underline">Session on GO</a>
              <p className="text-sm text-gray-600">Intro to concurrent programming with Golang.</p>
            </li>
          </ul>
        </Card>

        <Card title="Recent Announcements">
          <ul className="space-y-4">
            <li>
              <p className="text- font-blackmedium">Merchandise Launching Soon!</p>
              <p className="text-sm text-gray-600">New TL-branded gear will be available starting next week.</p>
            </li>
            <li>
              <p className="text-black font-medium">Games + Free Goodies!</p>
              <p className="text-sm text-gray-600">Participate at the old football ground to win exclusive TL goodies.</p>
            </li>
            <li>
              <p className="text-black font-medium">Lab Access Changes</p>
              <p className="text-sm text-gray-600">Access cards will now be issued on a monthly basis.</p>
            </li>
          </ul>
        </Card>

        <Card title="Ongoing Projects">
          <ul className="space-y-4">
            <li>
              <p className="font-medium">TL Attendance System</p>
              <p className="text-sm text-gray-600">QR-based member tracking system under development.</p>
            </li>
            <li>
              <p className="font-medium">Inventory Automation</p>
              <p className="text-sm text-gray-600">Digitizing lab tools checkout and stock tracking.</p>
            </li>
          </ul>
        </Card>

        <Card title="Feedback & Suggestions">
          <ul className="space-y-4">
            <li>
              <p className="font-medium">Workshop Timings</p>
              <p className="text-sm text-gray-600">Many members prefer sessions after 6 PM due to classes.</p>
            </li>
            <li>
              <p className="font-medium">More Inter-Domain Collabs</p>
              <p className="text-sm text-gray-600">Combine electronics and design for exciting projects.</p>
            </li>
          </ul>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
