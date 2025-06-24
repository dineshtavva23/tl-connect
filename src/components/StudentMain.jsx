import workshops from "@/data/workshops.json";
import tasks from "@/data/tasks.json";
import Card from "@/components/Card";
import announcements from "@/data/announcements.json";
import lectures from "@/data/summerschool.json";

export default function studentMain(){
    const upcomingWorkshops = workshops.filter(w => w.status === "upcoming").slice(0, 3);
      const topTasks = tasks.filter(t => t.status === "Pending").slice(0, 3); // or filter by role if needed
      const latestAnnouncements = announcements.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
      const today = new Date();
    
      const upcomingLectures = lectures
        .filter(lecture => new Date(lecture.date) > today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);
    return(
        <main className="max-w-4xl mx-auto px-4 py-8 grid gap-6 grid-cols-1">

        <Card title="Upcoming Workshops" className="bg-white border-l-4 border-indigo-400">
          <ul className="space-y-4">
            {upcomingWorkshops.map((w, i) => (
              <li key={i}>
                <p className="font-medium text-indigo-700">{w.title}</p>
                <p className="text-sm text-gray-700">{w.description}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Pending Tasks" className="bg-white border-l-4 border-blue-400">
          <ul className="space-y-4">
            {topTasks.map((task, i) => (
              <li key={i}>
                <p className="font-medium text-blue-700">{task.title}</p>
                <p className="text-sm text-gray-700">{task.description}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Class Join Links" className="bg-white border-l-4 border-green-400">
          <ul className="space-y-4">
            {upcomingLectures.map((lecture, i) => (
              <li key={i}
              >
                <a href={`${lecture.meetLink}`} className="text-green-700 font-semibold underline hover:text-green-500">{lecture.topic}</a>
                <p className="text-sm text-gray-700">{lecture.description}</p>

              </li>
            ))}

          </ul>
        </Card>

        <Card title="Recent Announcements" className="bg-white border-l-4 border-pink-400">
          <ul className="space-y-4">
            {latestAnnouncements.map((a, i) => (
              <li key={i}>
                <p className="text-pink-700 font-semibold">{a.title}</p>
                <p className="text-sm text-gray-700">{a.message}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Ongoing Projects" className="bg-white border-l-4 border-yellow-400">
          <ul className="space-y-4">
            <li>
              <p className="font-medium text-yellow-700">TL Attendance System</p>
              <p className="text-sm text-gray-700">QR-based member tracking system under development.</p>
            </li>
            <li>
              <p className="font-medium text-yellow-700">Inventory Automation</p>
              <p className="text-sm text-gray-700">Digitizing lab tools checkout and stock tracking.</p>
            </li>
          </ul>
        </Card>

        <Card title="Feedback & Suggestions" className="bg-white border-l-4 border-purple-400">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const message = e.target.message.value;

              if (!message.trim()) {
                alert("Please fill the message.");
                return;
              }

              // You can replace this with actual API call later
              console.log("Feedback submitted:", { message });
              alert("Thanks for your feedback!");

              e.target.reset();
            }}
          >
            <div>
              <label className="block text-sm font-medium text-purple-700">Message</label>
              <textarea
                name="message"
                rows="3"
                className="w-full border p-2 rounded text-gray-900"
                placeholder="Your suggestion here..."
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </Card>

      </main>

    );
}