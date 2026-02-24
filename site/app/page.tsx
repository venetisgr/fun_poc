import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <p className={styles.heroTag}>Est. DCCLIII AUC &middot; Still Conquering</p>
            <h1 className={styles.heroTitle}>Your Empire Needs You</h1>
            <p className={styles.heroSub}>
              Two great civilizations. One glorious purpose. Whether you prefer the disciplined ranks of
              the Macedonian phalanx or the ironclad order of Caesar&apos;s legions, there&apos;s a place for you
              on the right side of history.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/macedon" className="btn btn-gold">
                &#9876; Join the Phalanx
              </Link>
              <Link href="/legion" className="btn btn-primary">
                &#9876; Enlist in the Legion
              </Link>
            </div>
            <p className={styles.heroSmall}>
              &quot;The barbarians aren&apos;t going to civilize themselves.&quot; — Official HR Policy
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section">
        <div className="container text-center">
          <h2><span className="laurel-header">Why Gloria Aeterna?</span></h2>
          <p style={{ maxWidth: 650, margin: '1rem auto', color: 'var(--muted-text)' }}>
            We&apos;re not just another military-industrial complex. We&apos;re THE military-industrial complex
            that built Western Civilization&trade;.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={styles.statNum}>II</div>
              <div className={styles.statLabel}>Active Campaigns</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>XLVII</div>
              <div className={styles.statLabel}>Provinces Conquered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>C%</div>
              <div className={styles.statLabel}>Barbarian Disapproval Rating</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>XXV</div>
              <div className={styles.statLabel}>Year Retirement Plan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '2rem' }}>
            <span className="laurel-header">Active Campaigns</span>
          </h2>

          <div className={styles.campaignGrid}>
            <div className={`card ${styles.campaignCard}`}>
              <div className={styles.campaignBadge}>Macedon Division</div>
              <h3>Operation: Persian Freedom</h3>
              <p className={styles.campaignDesc}>
                Alexander himself has approved this campaign to liberate the Persian Empire
                from the Persians. Your 18-foot sarissa is the key to democracy&trade; in the East.
              </p>
              <ul className={styles.campaignList}>
                <li>&#10003; Competitive drachma compensation</li>
                <li>&#10003; Share of Darius&apos;s treasury (subject to availability)</li>
                <li>&#10003; Hellenistic cultural enrichment programs</li>
                <li>&#10003; &quot;Synaspismos or Die&quot; team-building retreats</li>
              </ul>
              <Link href="/macedon" className="btn btn-gold" style={{ width: '100%' }}>
                View Phalanx Positions &#8594;
              </Link>
            </div>

            <div className={`card ${styles.campaignCard}`}>
              <div className={`${styles.campaignBadge} ${styles.badgeRed}`}>Roman Division</div>
              <h3>Operation: Gallic Pacification</h3>
              <p className={styles.campaignDesc}>
                Gaul is divided into three parts, and Caesar intends to bill all three.
                Join the most efficient conquering force in the known world.
              </p>
              <ul className={styles.campaignList}>
                <li>&#10003; Denarii salary + performance bonuses (loot)</li>
                <li>&#10003; Generous land grants after 25 years</li>
                <li>&#10003; Roman citizenship pathway for auxiliaries</li>
                <li>&#10003; Subsidized gladius maintenance plan</li>
              </ul>
              <Link href="/legion" className="btn btn-primary" style={{ width: '100%' }}>
                View Legion Positions &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container text-center">
          <h2><span className="laurel-header">What Our Veterans Say</span></h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>&quot;Conquered three provinces, got a farm. Would recommend.&quot;</p>
              <div className={styles.testimonialAuthor}>
                — Marcus Aurelius, <em>Emperor (wrong century, doesn&apos;t matter)</em>
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
              <p>&quot;The phalanx formation really taught me the value of personal space — specifically, 18 feet of it.&quot;</p>
              <div className={styles.testimonialAuthor}>
                — Parmenion, <em>Senior Sarissa Manager</em>
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.stars}>&#9733;&#9734;&#9734;&#9734;&#9734;</div>
              <p>&quot;The Gauls are surprisingly organized. I was told this would be easy.&quot;</p>
              <div className={styles.testimonialAuthor}>
                — Anonymous Centurion, <em>Currently Hospitalized</em>
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>&quot;I came for the glory, I stayed for the dental plan. Just kidding. There is no dental plan. I stayed because desertion means death.&quot;</p>
              <div className={styles.testimonialAuthor}>
                — Titus Pullo, <em>Legionary, XIII Gemina</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee of the Month */}
      <section className="section-alt">
        <div className="container text-center">
          <h2><span className="laurel-header">Employee of the Month</span></h2>
          <div className={styles.eotm}>
            <div className={styles.eotmIcon}>&#9813;</div>
            <h3>Achilles, Son of Peleus</h3>
            <p className={styles.eotmTitle}>Independent Contractor (Hero Division)</p>
            <p className={styles.eotmQuote}>
              &quot;Is he even from our era? No. Is he technically freelance? Yes. Does he have anger management issues?
              Absolutely. But his Q3 performance metrics are unmatched. Zero deaths (personal), infinite kills.
              HR has noted the Hector incident but considers it within acceptable KPI parameters.&quot;
            </p>
            <p className={styles.eotmSmall}>
              * Achilles is a freelance contractor and his views on dragging enemies behind chariots do
              not reflect the official position of SPQR Holdings LLC.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>
            The Barbarians Won&apos;t Wait. Neither Should You.
          </h2>
          <p style={{ color: 'var(--marble)', opacity: 0.85, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Positions are filling faster than the Colosseum on fight night.
            Submit your application before the Ides of March.
          </p>
          <Link href="/apply" className="btn btn-gold">
            Submit to Glory &#8594;
          </Link>
        </div>
      </section>
    </>
  );
}
