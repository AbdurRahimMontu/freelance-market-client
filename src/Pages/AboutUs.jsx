import React from 'react';

const AboutUs = () => {
     const company = {
    name: 'MyCompany',
    tagline: 'Building modern solutions for a digital world',
    mission:
      'At MyCompany, our mission is to help businesses grow by delivering reliable, scalable, and user-friendly digital products.',
    vision:
      'We believe great software is built with clarity, collaboration, and a deep understanding of people.',
  };

  const values = [
    {
      title: 'Integrity',
      desc: 'We operate with honesty, transparency, and accountability in everything we do.',
    },
    {
      title: 'Innovation',
      desc: 'We embrace new ideas, technologies, and ways of thinking to stay ahead.',
    },
    {
      title: 'Collaboration',
      desc: 'We work closely with our clients and teammates to achieve shared success.',
    },
  ];

  const team = [
    { name: 'Alex Johnson', role: 'Founder & CEO' },
    { name: 'Maria Lee', role: 'Product Designer' },
    { name: 'David Kim', role: 'Lead Developer' },
    { name: 'Sarah Patel', role: 'Marketing Manager' },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About {company.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {company.tagline}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">{company.mission}</p>
            <p className="text-gray-600">{company.vision}</p>
          </div>
          <div className="bg-indigo-100 rounded-2xl p-10 text-center">
            <p className="text-indigo-700 text-xl font-medium">
              “Building trust through technology.”
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-xl border">
                <h3 className="text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4" />
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to work with {company.name}?
          </h2>
          <p className="mb-6 text-indigo-100">
            Let’s turn your ideas into impactful digital solutions.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;