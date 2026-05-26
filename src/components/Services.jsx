export default function Services({ ai }) {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ai.services.map((service, i) => (
            <div
              key={i}
              className="glass-strong p-8 group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        {ai.whyChooseUs && ai.whyChooseUs.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-secondary mb-4">
                Our Promise
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Why Choose Us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ai.whyChooseUs.map((item, i) => (
                <div key={i} className="glass p-6 text-center group hover:bg-white/5 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/50 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
