import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Donate — Gloria Aeterna Recruiting',
  description: 'Fund the expansion of civilization. Support the Macedonian or Roman campaigns with your generous contribution.',
};

const macedonFunds = [
  { icon: '\u2694', label: 'Sarissa Production', desc: 'Each 18-foot pike costs 14 drachmai in Corinthian ash wood alone. We need 40,000 of them. Do the math.' },
  { icon: '\u{1F3FA}', label: 'Olive Oil for the Troops', desc: 'Used for cooking, bathing, wrestling practice, and philosophical debate lubrication. A Macedonian without olive oil is just a Thracian.' },
  { icon: '\u{1F3DB}', label: 'Portable Hellenization Kits', desc: 'Each conquered city receives a complimentary amphitheater blueprint, a bust of Homer, and a strongly-worded pamphlet about democracy.' },
  { icon: '\u{1F40E}', label: 'Companion Cavalry Horses', desc: 'Bucephalus-grade warhorses don\'t breed themselves. Current stable capacity: 2,000. Target: 8,000. Every horse you fund is a barbarian who reconsiders.' },
  { icon: '\u{1F4DC}', label: 'Campaign Cartography', desc: 'Alexander keeps marching east and our maps literally end. Funding needed for scouts to figure out what\'s past the Indus River.' },
];

const romeFunds = [
  { icon: '\u{1F6E1}', label: 'Scutum Shield Program', desc: 'The rectangular scutum is the backbone of the tortoise formation. Each shield requires 10 kg of laminated wood, linen, and a bronze boss. We lose 300 per battle.' },
  { icon: '\u{1F697}', label: 'Road Infrastructure (Via Expansion)', desc: 'You can\'t conquer what you can\'t reach. Every mile of Roman road costs 500,000 sesterces. Currently paving through Gaul at a rate of 2 miles/month.' },
  { icon: '\u{1F3D7}', label: 'Siege Engine R&D', desc: 'The Gallic hill forts won\'t breach themselves. Funding supports ballista development, battering ram upgrades, and a promising new onager prototype.' },
  { icon: '\u{1F35E}', label: 'Legionary Grain Rations', desc: 'Each soldier requires 1 kg of wheat per day. That\'s 30,000 kg daily for six legions. The grain doesn\'t requisition itself (well, sometimes it does, but we call that "foraging").' },
  { icon: '\u{1F3DB}', label: 'Fortified Camp Construction', desc: 'Every night, every legion builds a full camp. From scratch. Timber, ditches, palisades. Your donation buys the axes and the will to keep digging.' },
];

const donationTiers = [
  {
    amount: 'V',
    currency: 'Denarii',
    title: 'Camp Follower',
    desc: 'Your name inscribed on a small rock near the latrine trench. Includes a handwritten "thank you" from a centurion\'s clerk.',
  },
  {
    amount: 'XXV',
    currency: 'Denarii',
    title: 'Auxiliary Patron',
    desc: 'One soldier eats for a week. Receive a wax seal certificate and the knowledge that a barbarian somewhere is slightly less comfortable.',
  },
  {
    amount: 'C',
    currency: 'Denarii',
    title: 'Praetorian Benefactor',
    desc: 'Fund a full scutum or three sarissae. Your name etched on equipment (may be obscured by enemy blood). Invitation to annual Triumph viewing.',
    featured: true,
  },
  {
    amount: 'D',
    currency: 'Denarii',
    title: 'Senatorial Patron',
    desc: 'One mile of road or two siege engines. Honorary military tribune title. Private dinner with a legate. Your bust displayed in the forum (if we conquer one nearby).',
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.tag}>Imperial Treasury Division</p>
          <h1>Fund the Expansion of Civilization</h1>
          <p className={styles.headerSub}>
            Empires don&apos;t build themselves. Actually, they do — but it&apos;s faster with your money.
            Choose your cause, open your purse, and know that every denarius brings the
            known world one step closer to order, roads, and mandatory Latin classes.
          </p>
        </div>
      </section>

      {/* Cause Cards */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">
            <span className="laurel-header">Choose Your Cause</span>
          </h2>
          <p className="text-center" style={{ color: 'var(--muted-text)', maxWidth: 600, margin: '0.5rem auto 0' }}>
            Both campaigns need your support. One marches east toward Persia. The other marches
            north into Gaul. Both march toward glory.
          </p>

          <div className={styles.causeGrid}>
            {/* Macedon */}
            <div className={styles.causeCard}>
              <div className={`${styles.causeHeader} ${styles.causeHeaderMacedon}`}>
                <h3>&#9876; The Macedonian Campaign</h3>
                <p className={styles.causeSubtitle}>Operation: Persian Freedom — Alexander&apos;s Eastern Expansion Fund</p>
              </div>
              <div className={styles.causeBody}>
                <div className={styles.causeWhy}>
                  <h4>Why Donate?</h4>
                  <p>
                    The Persian Empire has had it too good for too long. Their roads are inferior, their
                    governance is decentralized, and their trousers are an affront to Hellenic civilization.
                    Alexander has a vision: one world, one culture, one man in charge. But visions don&apos;t fund
                    themselves. Every drachma you contribute directly supports the replacement of Eastern
                    barbarism with Greek philosophy, theater, and an unreasonable number of cities
                    named Alexandria.
                  </p>
                </div>

                <h4 style={{ color: 'var(--imperial-purple)', fontVariant: 'small-caps', marginBottom: '0.5rem' }}>
                  Where Your Money Goes
                </h4>
                <ul className={styles.fundList}>
                  {macedonFunds.map((item, i) => (
                    <li key={i} className={styles.fundItem}>
                      <span className={styles.fundIcon}>{item.icon}</span>
                      <div>
                        <span className={styles.fundLabel}>{item.label}:</span>{' '}
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className={styles.goalBox}>
                  <h4>The End Goal</h4>
                  <p>
                    Complete Hellenization of all territory between Greece and India. A unified empire where
                    every citizen speaks Greek, attends the gymnasium, and accepts that Alexander is probably
                    a god. Estimated completion: whenever Alexander decides to stop marching (projected date: never).
                  </p>
                </div>
              </div>
            </div>

            {/* Rome */}
            <div className={styles.causeCard}>
              <div className={`${styles.causeHeader} ${styles.causeHeaderRome}`}>
                <h3>&#9876; The Roman Campaign</h3>
                <p className={styles.causeSubtitle}>Operation: Gallic Pacification — Caesar&apos;s Northern Expansion Fund</p>
              </div>
              <div className={styles.causeBody}>
                <div className={styles.causeWhy}>
                  <h4>Why Donate?</h4>
                  <p>
                    Gaul is divided into three parts, and none of them pay taxes to Rome — yet. The Gauls
                    have mustaches, drink beer instead of wine, and wear plaid. This cannot stand. Caesar has
                    generously volunteered to bring Roman law, Roman roads, and Roman property seizure to
                    these underdeveloped territories. But legions march on grain, and siege engines
                    don&apos;t build themselves. Your sesterces are the difference between civilization
                    and… whatever the Gauls are doing up there.
                  </p>
                </div>

                <h4 style={{ color: 'var(--imperial-purple)', fontVariant: 'small-caps', marginBottom: '0.5rem' }}>
                  Where Your Money Goes
                </h4>
                <ul className={styles.fundList}>
                  {romeFunds.map((item, i) => (
                    <li key={i} className={styles.fundItem}>
                      <span className={styles.fundIcon}>{item.icon}</span>
                      <div>
                        <span className={styles.fundLabel}>{item.label}:</span>{' '}
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className={styles.goalBox}>
                  <h4>The End Goal</h4>
                  <p>
                    Total pacification of Gaul, integration into the Roman provincial system, and construction
                    of infrastructure so good that people 2,000 years later will still be using the roads.
                    Also: Caesar needs impressive military victories for political reasons back in Rome, but
                    that&apos;s not your concern. Your concern is glory. Focus on the glory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="section-alt">
        <div className="container text-center">
          <h2><span className="laurel-header">Donation Tiers</span></h2>
          <p style={{ color: 'var(--muted-text)', maxWidth: 550, margin: '0.5rem auto 0' }}>
            Every contribution matters. Some just matter more. Select your level of imperial patronage.
          </p>

          <div className={styles.tierGrid}>
            {donationTiers.map((tier, i) => (
              <div
                key={i}
                className={`${styles.tierCard} ${tier.featured ? styles.tierFeatured : ''}`}
              >
                {tier.featured && <div className={styles.tierBadge}>Most Popular</div>}
                <div className={styles.tierAmount}>{tier.amount}</div>
                <div className={styles.tierTitle}>{tier.currency} — {tier.title}</div>
                <p className={styles.tierDesc}>{tier.desc}</p>
              </div>
            ))}
          </div>

          <p className={styles.disclaimer}>
            * All donations are final. Refunds are not recognized under Roman or Macedonian law. SPQR Holdings LLC
            reserves the right to allocate funds at the discretion of the commanding general. Tax receipts are not
            available because taxation is a concept we apply to others, not ourselves. Donors giving over D denarii
            will receive an audit from the Quaestor&apos;s office — this is an honor, not an investigation.
            Donations do not guarantee survival, glory, or territorial naming rights. Past conquests do
            not guarantee future expansion. Please conquer responsibly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>Ready to Invest in Civilization?</h2>
          <p style={{ color: 'var(--muted-text)', maxWidth: 550, margin: '0 auto 2rem' }}>
            Your denarii today are tomorrow&apos;s aqueducts, amphitheaters, and subjugated provinces.
            Can&apos;t donate? You can still serve — the empire always needs more soldiers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/apply" className="btn btn-primary">Enlist Instead &#8594;</Link>
            <Link href="/benefits" className="btn btn-outline">Review Benefits</Link>
          </div>
        </div>
      </section>
    </>
  );
}
