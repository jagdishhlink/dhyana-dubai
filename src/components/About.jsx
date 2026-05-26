export default function About({ business, ai }) {
  const stats = [
    { value: business.rating || '5.0', label: 'Rating' },
    { value: business.reviewsCount || '100+', label: 'Reviews' },
    { value: '5★', label: 'Service' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            {ai.aboutTitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              {ai.aboutText}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-5 text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            {business.address && (
              <div className="glass-strong p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-white/60 text-sm">{business.address}</p>
                </div>
              </div>
            )}

            {business.phone && (
              <div className="glass-strong p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-white/60 text-sm">{business.phone}</p>
                </div>
              </div>
            )}

            {business.website && (
              <div className="glass-strong p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0">
                  🌐
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Website</h3>
                  <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                    {business.website}
                  </a>
                </div>
              </div>
            )}

            {business.openingHours && (
              <div className="glass-strong p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0">
                  🕐
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Hours</h3>
                  <p className="text-white/60 text-sm">{business.openingHours}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
