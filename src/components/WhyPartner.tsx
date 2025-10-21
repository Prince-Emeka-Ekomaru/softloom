const WhyPartner = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Lightning Fast',
      description: 'Experience rapid development cycles and quick time-to-market. Our agile methodologies and modern tech stack ensure your projects are delivered on schedule without compromising quality.',
      color: 'softloom-yellow',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Built with security at its core. We implement industry-leading security practices, encryption standards, and compliance measures to protect your business and customer data.',
      color: 'softloom-green',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Support',
      description: 'Dedicated optimization and feature scaling post-launch support. We stay with you beyond deployment to ensure your software evolves with your business needs.',
      color: 'softloom-blue',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-softloom-blue">Why Partner with Softloom?</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We're not just a vendor—we're your technology partner committed to your success.
            Discover what sets us apart in the software development landscape.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card text-center group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${benefit.color}/10 text-${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-softloom-blue to-softloom-dark-blue rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Softloom to deliver innovative software solutions
            that drive growth and efficiency.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-softloom-yellow hover:bg-amber-500 text-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyPartner

