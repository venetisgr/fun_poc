import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Macedonian Phalanx Division — Gloria Aeterna Recruiting',
  description: 'Join the Macedonian Phalanx. 18-foot sarissa included. Conquer Persia with the greatest military formation known to man.',
};

const positions = [
  {
    title: 'Sarissa Operator',
    type: 'Full-Time, Permanent (or until death)',
    pay: '12 drachmai/month + loot bonus',
    description: 'Front-line pike operator responsible for maintaining 18-foot sarissa in synaspismos formation. Must be comfortable with extremely close quarters and the man behind you literally pushing you into enemy lines.',
    requirements: [
      'Ability to carry and operate 18-foot pike in coordinated formation',
      'Strong core muscles (you are the formation)',
      'No fear of cavalry charges (they fear YOU)',
      'Synaspismos experience preferred but not required — we provide training',
      'Must pass mandatory "phalanx trust fall" (actual combat)',
    ],
  },
  {
    title: 'Companion Cavalry Officer',
    type: 'Full-Time, Leadership Track',
    pay: '40 drachmai/month + first pick of Persian treasury items',
    description: 'Elite mounted unit reporting directly to Alexander. Responsible for flanking maneuvers that historians will write about for millennia. Horse provided. Horse name non-negotiable (it\'s Bucephalus II through Bucephalus MXII).',
    requirements: [
      'Noble birth (or convincing forgery thereof)',
      'Advanced horsemanship certification',
      'Willingness to charge directly at the Persian Immortals',
      'Dramatic flair for battlefield speeches',
      'Must look good in a Macedonian sunhat (kausia)',
    ],
  },
  {
    title: 'Hypaspist (Shield Bearer)',
    type: 'Full-Time, Flexible Deployment',
    pay: '15 drachmai/month + hazard bonus',
    description: 'Versatile heavy infantry bridging the gap between the phalanx and the cavalry. If the phalanx is a wall and the cavalry is a hammer, you\'re the duct tape holding this glorious mess together.',
    requirements: [
      'Proficiency with both aspis shield and short sword',
      'Ability to rapidly switch between formation types',
      'Extreme physical fitness (you will be running)',
      'Comfort with being called "the other infantry"',
      'Must not ask why you\'re called a shield bearer when you also carry a sword',
    ],
  },
  {
    title: 'Chief Hellenization Officer',
    type: 'Part-Time, Cultural Division',
    pay: '20 drachmai/month + amphora of wine',
    description: 'Responsible for bringing Greek culture to conquered territories. This includes establishing gymnasiums, theaters, and explaining to local populations why their culture, while "interesting," is objectively inferior to ours.',
    requirements: [
      'Degree in Philosophy, Rhetoric, or Applied Condescension',
      'Fluency in Greek (obviously) and basic Persian (for explaining things slowly)',
      'Experience building gymnasiums in hostile environments',
      'Strong belief in Hellenic cultural supremacy',
      'Ability to say "it\'s not colonization, it\'s cultural enrichment" with a straight face',
    ],
  },
];

export default function MacedonPage() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.tag}>Macedon Division &middot; Eastern Campaign</p>
          <h1>Operation: Persian Freedom</h1>
          <p className={styles.headerSub}>
            Alexander the Great is assembling the finest fighting force the world has ever known.
            The Persian Empire won&apos;t liberate itself. Well, they don&apos;t want to be liberated at all, actually.
            But that&apos;s never stopped us before.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center"><span className="laurel-header">Why Macedon?</span></h2>

          <div className={styles.cultureGrid}>
            <div className={styles.cultureItem}>
              <div className={styles.cultureIcon}>&#9876;</div>
              <h3>Superior Formation</h3>
              <p>
                The phalanx is an unbreakable wall of spears. The Persians have &quot;numbers&quot; and &quot;cavalry&quot;
                and &quot;the home field advantage.&quot; We have 18-foot pikes. Math is on our side.
              </p>
            </div>
            <div className={styles.cultureItem}>
              <div className={styles.cultureIcon}>&#127942;</div>
              <h3>Proven Leadership</h3>
              <p>
                Alexander has never lost a battle. Some say that&apos;s because he&apos;s a military genius.
                Others say it&apos;s because he fires anyone who suggests retreat. Either way: winning record.
              </p>
            </div>
            <div className={styles.cultureItem}>
              <div className={styles.cultureIcon}>&#127758;</div>
              <h3>Cultural Mission</h3>
              <p>
                We&apos;re not conquering — we&apos;re &quot;culturally integrating.&quot; Every city we take gets a gymnasium,
                a theater, and a mandatory Greek language course. You&apos;re welcome, Persia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>
            <span className="laurel-header">Open Positions</span>
          </h2>
          <p className="text-center" style={{ color: 'var(--muted-text)', marginBottom: '2rem' }}>
            All positions report to Alexander. No, you cannot email him directly.
          </p>

          <div className={styles.positionList}>
            {positions.map((pos, i) => (
              <div key={i} className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <div>
                    <h3>{pos.title}</h3>
                    <p className={styles.posType}>{pos.type}</p>
                  </div>
                  <div className={styles.posPay}>{pos.pay}</div>
                </div>
                <p className={styles.posDesc}>{pos.description}</p>
                <div className={styles.posReqs}>
                  <h4>Requirements:</h4>
                  <ul>
                    {pos.requirements.map((req, j) => (
                      <li key={j}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Link href="/apply" className="btn btn-gold" style={{ marginTop: '1rem' }}>
                  Apply for This Position &#8594;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="section">
        <div className="container text-center">
          <div className={styles.warningBox}>
            <h3 className="text-red">&#9888; Important Notice from Macedonian HR</h3>
            <p>
              Recent rumors that the Persian Immortals are &quot;actually pretty tough&quot; are classified as
              <strong> enemy propaganda</strong> and should be reported to your commanding officer immediately.
              Remember: the Persians fight in loose formations wearing <em>trousers</em>. Trousers.
              This alone should tell you everything about their military readiness.
            </p>
            <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--muted-text)' }}>
              — Macedonian Department of Morale and Information Control
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
