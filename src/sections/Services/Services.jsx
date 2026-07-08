import '@styles/services.css'

const offerings = [
  {
    icon: 'bx-mobile-alt',
    title: 'End-to-End App Development',
    description:
      'I build your app from the ground up — architecture decisions, native config, and a scalable folder structure from day one — using React Native (Expo or bare CLI, depending on what your project needs). This covers everything from your first commit to a stable release on both the App Store and Play Store, including code signing and store submission.',
    bestFor:
      'Founders and businesses without an in-house mobile developer, building from zero.',
    tags: ['React Native CLI & Expo', 'TypeScript', 'EAS Build & Submit'],
    engagement: 'Project-based, scoped after a discovery call',
  },
  {
    icon: 'bx-plug',
    title: 'Feature Development & Integrations',
    description:
      "Already have an app and need something specific built? I integrate real-time chat, live maps and location, push notifications, OAuth login, and payment flows — the features that are easy to get wrong and expensive to fix later. I've shipped every one of these in production apps with thousands of active users.",
    bestFor:
      'Teams with an existing app that need a specific, high-risk feature built correctly.',
    tags: ['Socket.IO', 'Google Maps SDK', 'FCM Push', 'OAuth 2.0', 'Payments'],
    engagement: 'Fixed-scope or hourly, depending on the feature',
  },
  {
    icon: 'bx-revision',
    title: 'Upgrades, Migrations & Maintenance',
    description:
      "If your app is on an older React Native version or architecture, I handle the upgrade — including New Architecture migration (Fabric, TurboModules), native Gradle/Podfile changes, and crash monitoring setup — without breaking the live app for your existing users.",
    bestFor:
      'Apps on outdated React Native versions or without crash monitoring in place.',
    tags: ['New Architecture Migration', 'Sentry', 'Native Config (Gradle/Xcode)'],
    engagement: 'Fixed-scope, typically 1–3 weeks depending on codebase size',
  },
]

const processSteps = [
  { icon: 'bx-conversation', label: 'Discovery', desc: 'We talk through your idea, scope, and timeline' },
  { icon: 'bx-code-alt', label: 'Build', desc: 'I develop in regular milestones, with progress updates' },
  { icon: 'bx-rocket', label: 'Ship & Support', desc: 'Store submission handled, plus post-launch support' },
]

function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="heading reveal">
        How I Can <span>Help</span>
      </h2>
      <p className="section-subtitle reveal">
        I take React Native projects from architecture to store approval —
        here's how that breaks down.
      </p>

      {/* Service Offerings */}
      <div className="services-offerings reveal-stagger">
        {offerings.map((o, i) => (
          <div
            className="service-card reveal"
            key={o.title}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="service-card__header">
              <div className="service-card__icon">
                <i className={`bx ${o.icon}`} />
              </div>
              <h3 className="service-card__title">{o.title}</h3>
            </div>

            <p className="service-card__desc">{o.description}</p>

            <div className="service-card__meta">
              <p className="service-card__best-for">
                <strong>Best for:</strong> {o.bestFor}
              </p>
            </div>

            <div className="service-card__tags">
              {o.tags.map((tag) => (
                <span className="service-tag" key={tag}>{tag}</span>
              ))}
            </div>

            <p className="service-card__engagement">
              <i className="bx bx-calendar-check" /> {o.engagement}
            </p>
          </div>
        ))}
      </div>

      {/* How I Work Strip */}
      <div className="services-process reveal">
        <h3 className="services-process__title">How I Work</h3>
        <div className="services-process__steps">
          {processSteps.map((step, i) => (
            <div className="process-step" key={step.label}>
              <div className="process-step__number">{i + 1}</div>
              <div className="process-step__content">
                <div className="process-step__icon">
                  <i className={`bx ${step.icon}`} />
                </div>
                <h4>{step.label}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="services-cta reveal">
        <p className="services-cta__text">
          Currently open to remote contract &amp; freelance React Native
          projects.
        </p>
        <a href="#contact" className="btn btn-primary">
          Get In Touch
        </a>
      </div>
    </section>
  )
}

export default Services
