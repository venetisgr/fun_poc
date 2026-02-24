import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: "Caesar's Legions — Gloria Aeterna Recruiting",
  description: "Enlist in Caesar\'s Legions. Build roads. Conquer Gaul. Earn Roman citizenship (in 25 years). Apply now.",
};

const positions = [
  {
    title: 'Legionary (Miles Gregarius)',
    type: 'Full-Time, 25-Year Contract',
    pay: '225 denarii/year + campaign bonus',
    description: 'The backbone of Roman civilization. You will march, dig, build, fight, and march some more. Your daily routine includes constructing a fortified camp, training for 6 hours, and asking yourself why you signed a 25-year contract. But remember: you\'re not just a soldier. You\'re a mobile infrastructure company with a sword.',
    requirements: [
      'Roman citizenship (or strong desire to eventually obtain it)',
      'Ability to carry 60+ pounds of equipment for 20 miles daily',
      'Proficiency with gladius, pilum, and entrenching tools',
      'Must be between 17 and 46 years of age (waivers available during manpower shortages)',
      'Clean criminal record (pardons available for those willing to serve in Britain)',
    ],
  },
  {
    title: 'Centurion (Management Track)',
    type: 'Full-Time, Promoted from Within',
    pay: '3,750 denarii/year + vine staff (for motivational purposes)',
    description: 'Middle management, Roman style. You\'ll be responsible for 80 legionaries, their morale, their discipline, and their tendency to complain about the food. Your primary management tool is a vine staff, which you are authorized to use for "corrective encouragement." Modern HR would have concerns. Roman HR does not exist.',
    requirements: [
      'Minimum 5 years legionary service with exemplary record',
      'Demonstrated ability to stand at the front of a formation (literally)',
      'Strong right arm (for vine staff administration)',
      'Ability to deliver motivational speeches featuring the phrase "Roma Invicta"',
      'Must be comfortable with a 40% mortality rate for your position',
    ],
  },
  {
    title: 'Auxiliary (Contractor — Diverse Backgrounds Welcome)',
    type: 'Contract, 25 Years — Citizenship Upon Completion',
    pay: '75 denarii/year + the priceless gift of eventual Roman identity',
    description: 'Are you a non-citizen with specialized skills? Perhaps a Balearic slinger, a Cretan archer, or a Germanic cavalryman? We value diversity* at the Legion! (*Diversity meaning "we need your specific ethnic military skill." Your culture itself will be gradually replaced by Roman customs over your 25-year term.)',
    requirements: [
      'Non-Roman birth (that\'s the whole point)',
      'Specialized combat skill not found among Roman citizens',
      'Willingness to fight your own people if deployed to your homeland',
      'Acceptance that your pay is one-third of a legionary\'s (it builds character)',
      'Must not ask about citizenship status more than once per year',
    ],
  },
  {
    title: 'Military Engineer (Praefectus Fabrum)',
    type: 'Full-Time, Technical Division',
    pay: '1,500 denarii/year + naming rights to one bridge',
    description: 'Rome doesn\'t just conquer — it builds. Roads, aqueducts, bridges, siege engines, and the occasional wall to keep the barbarians out. As a military engineer, you\'ll bring Roman infrastructure to places that didn\'t ask for it but will thank us later (in Latin, which they\'ll also be learning).',
    requirements: [
      'Advanced knowledge of Roman construction techniques',
      'Ability to build a bridge across the Rhine in 10 days (historical precedent exists)',
      'Experience with siege engines (scorpio, ballista, onager)',
      'Understanding that "road-building" is both literal and a metaphor for civilization',
      'Must not cry when barbarians burn down your latest engineering project',
    ],
  },
];

export default function LegionPage() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.tag}>Roman Division &middot; Gallic Campaign</p>
          <h1>Operation: Gallic Pacification</h1>
          <p className={styles.headerSub}>
            All of Gaul is divided into three parts. Caesar intends to conquer all three,
            build roads through them, and then write a best-selling book about it in the third person.
            You can be part of this story. Literally — he&apos;s taking notes.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="section">
        <div className="container">
          <h2 className="text-center"><span className="laurel-header">The Roman Advantage</span></h2>

          <div className={styles.valueGrid}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>&#9851;</div>
              <h3>Systematic Efficiency</h3>
              <p>
                While other armies wander around hitting people with sticks, we operate
                with standardized equipment, standardized formations, and standardized methods of
                destroying opposition. McDonald&apos;s wishes they had our franchise model.
              </p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>&#127959;</div>
              <h3>Infrastructure Legacy</h3>
              <p>
                We don&apos;t just conquer — we improve. Every territory gets roads, aqueducts,
                public baths, and a toga store. In 2,000 years people will still be using our roads.
                They won&apos;t maintain them, but they&apos;ll use them.
              </p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>&#128220;</div>
              <h3>Career Advancement</h3>
              <p>
                The Roman legion is a meritocracy. Start as a legionary, work your way up to centurion,
                and eventually retire with land, wealth, and PTSD that won&apos;t be recognized as a medical
                condition for another 2,000 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Messaging */}
      <section className="section-alt">
        <div className="container">
          <div className={styles.corpMessage}>
            <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>
              <span className="laurel-header">A Message from Caesar</span>
            </h2>
            <blockquote className={styles.caesarQuote}>
              <p>
                &quot;I came, I saw, I hired. The Gallic campaign represents an unprecedented growth opportunity
                for the Republic. Our Q4 projections show a 300% increase in territorial holdings, pending
                Senate approval (which I will obtain, one way or another).
              </p>
              <p style={{ marginTop: '0.8rem' }}>
                To those who say Gaul cannot be conquered: Gaul is already divided. We&apos;re merely providing
                organizational structure. Think of it less as &apos;invasion&apos; and more as a &apos;hostile merger.&apos;
              </p>
              <p style={{ marginTop: '0.8rem' }}>
                Join us. The pay is decent, the retirement plan is generous (if you survive), and you&apos;ll
                be part of the greatest civilization the world has ever known. I guarantee it personally.*&quot;
              </p>
            </blockquote>
            <p className={styles.caesarAttrib}>
              — Gaius Julius Caesar, <em>Proconsul, CEO of Gallic Operations</em>
            </p>
            <p className={styles.caesarSmall}>
              * Personal guarantees void after assassination. See Terms of Servitude for details.
            </p>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>
            <span className="laurel-header">Open Positions</span>
          </h2>
          <p className="text-center" style={{ color: 'var(--muted-text)', marginBottom: '2rem' }}>
            All positions include complimentary caligae (military sandals) and one (1) set of lorica segmentata.
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
                <Link href="/apply" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Apply for This Position &#8594;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life */}
      <section className="section-alt">
        <div className="container text-center">
          <h2><span className="laurel-header">A Day in the Life</span></h2>
          <div className={styles.timeline}>
            <div className={styles.timeItem}>
              <div className={styles.timeHour}>IV:00</div>
              <div className={styles.timeDesc}>Wake up. Wonder why you signed up. Remember: glory.</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeHour}>V:00</div>
              <div className={styles.timeDesc}>Morning drill. Practice pilum throws. Breakfast is porridge (posca if you&apos;re lucky).</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeHour}>VII:00</div>
              <div className={styles.timeDesc}>March 20 miles carrying 60 pounds of equipment. Team building exercise.</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeHour}>XII:00</div>
              <div className={styles.timeDesc}>Arrive at destination. Build an entire fortified camp. From scratch. Again.</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeHour}>XV:00</div>
              <div className={styles.timeDesc}>Possible combat with Gauls. Alternatively: road construction. Both equally likely.</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeHour}>XVIII:00</div>
              <div className={styles.timeDesc}>Dinner (more porridge). Listen to centurion explain why tomorrow will be worse.</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeHour}>XX:00</div>
              <div className={styles.timeDesc}>Guard duty or sleep. If guard duty: do not fall asleep (penalty: death).</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
