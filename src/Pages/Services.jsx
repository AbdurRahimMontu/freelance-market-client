import { Briefcase, Settings, ArrowRight, CheckCircle } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    location: "Berlin, Germany",
    type: "Contract",
  },
];

const services = [
  {
    title: "Web Development",
    description: "Modern, scalable web applications using React, Next.js, and Tailwind CSS.",
  },
  {
    title: "UI/UX Design",
    description: "User-centered designs that are clean, intuitive, and conversion-focused.",
  },
  {
    title: "API & Backend",
    description: "Secure, high-performance APIs and backend systems built to scale.",
  },
];

export default function JobsServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Jobs & Services</h1>
          <p className="text-gray-600 mt-3">
            Work with us or explore the services we offer to grow your business.
          </p>
        </header>

        {/* Jobs Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" /> Careers
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
                  View Job <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6" /> Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
              >
                <CheckCircle className="w-6 h-6 text-black mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {service.description}
                </p>

                <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
