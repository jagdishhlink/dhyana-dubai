export default function Hero({ business, ai }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Category badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
          <span className="text-sm font-medium text-white/80">{business.category}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up">
          <span className="gradient-text">{business.name}</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/60 font-light mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {ai.tagline}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/50 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {ai.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            {ai.ctaButtonText || 'Get Started'}
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>

        {/* Rating badge */}
        {business.rating && (
          <div className="inline-flex items-center gap-3 glass px-6 py-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.round(parseFloat(business.rating)) ? 'text-yellow-400' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold">{business.rating}</span>
            {business.reviewsCount && (
              <span className="text-white/50 text-sm">({business.reviewsCount} reviews)</span>
            )}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
