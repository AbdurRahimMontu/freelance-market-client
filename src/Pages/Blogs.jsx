import { Briefcase, CalendarDays, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    location: "New York, USA",
    type: "Contract",
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
  },
];

const blogs = [
  {
    title: "How We Build Scalable React Apps",
    date: "Jan 5, 2026",
    excerpt: "A behind-the-scenes look at our architecture, tooling, and best practices.",
  },
  {
    title: "Design Systems That Actually Work",
    date: "Dec 18, 2025",
    excerpt: "Lessons learned from building and maintaining a real-world design system.",
  },
  {
    title: "Tailwind CSS: Tips for Large Projects",
    date: "Nov 30, 2025",
    excerpt: "How to keep your Tailwind codebase clean, scalable, and readable.",
  },
];

export default function JobsBlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Jobs & Blog</h1>
          <p className="text-gray-600 mt-3">
            Join our team or read what we’ve been building and learning.
          </p>
        </header>

        {/* Jobs Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" /> Open Positions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-gray-600 mt-2">{job.location}</p>
                <p className="text-sm text-gray-500 mt-1">{job.type}</p>

                <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black hover:underline">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Latest Blog Posts
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays className="w-4 h-4" />
                  {blog.date}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {blog.excerpt}
                </p>

                <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
