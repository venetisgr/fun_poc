import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Benefits & Compensation — Gloria Aeterna Recruiting',
  description: 'Compare benefits across Macedonian and Roman divisions. Healthcare, retirement, PTO, and more.',
};

const comparisonData = [
  {
    category: 'Base Compensation',
    macedon: '12 drachmai/month (Sarissa Operator)',
    rome: '225 denarii/year (Legionary)',
    notes: 'Both are technically more than you\'d make farming, which is the only other option.',
  },
  {
    category: 'Healthcare',
    macedon: 'Pray to Asclepius. Seriously, that\'s the plan. There\'s a field medic who knows how to amputate and nothing else.',
    rome: 'Battlefield medicus available. Treatment includes wine (antiseptic), vinegar (painkiller), and the phrase "walk it off, soldier."',
    notes: 'Neither division covers pre-existing conditions, which includes "being mortal."',
  },
  {
    category: 'Retirement Plan',
    macedon: 'Share of conquered treasury + land in whatever territory Alexander decides is yours. Vesting period: until Alexander says so.',
    rome: 'Land grant in conquered territory after 25 years of service. Location non-negotiable. May be in Britain. We\'re sorry.',
    notes: 'Both plans assume you survive long enough to retire, which is optimistic.',
  },
  {
    category: 'PTO / Leave',
    macedon: 'Leave is granted when Alexander rests. Alexander does not rest. There was that one time in Babylon but he was dying.',
    rome: 'Saturnalia (1 week) + 3 floating holidays. Additional leave for triumphs. Unauthorized leave classified as desertion (penalty: death).',
    notes: 'Work-life balance is a concept that won\'t be invented for 2,000 years.',
  },
  {
    category: 'Dress Code',
    macedon: 'Mandatory. Linothorax armor, Macedonian kausia hat. Violations punished by flogging. No casual Fridays.',
    rome: 'Mandatory. Lorica segmentata, caligae, helmet. Uniform must be maintained at personal expense. No, you cannot customize your shield.',
    notes: 'Both organizations believe that looking identical builds team cohesion and eliminates individuality (a feature, not a bug).',
  },
  {
    category: 'Signing Bonus',
    macedon: 'One (1) sarissa (18-foot pike). A drachma coin that Alexander personally breathed on. A sense of Hellenic superiority.',
    rome: 'Three (3) denarii advance. One (1) gladius. One (1) set of armor (deposit required). Welcome orientation: "You Belong to Rome Now."',
    notes: 'Neither signing bonus is taxed, because income tax hasn\'t been invented yet. Enjoy it while it lasts.',
  },
  {
    category: 'Professional Development',
    macedon: 'Mentorship from Alexander himself (if he likes you). Cross-cultural immersion in Persia. Philosophy classes by traveling Stoics.',
    rome: 'Centurion leadership track. Engineering certification. Literacy program (Latin only — other languages are barbaric and unnecessary).',
    notes: 'Rome offers more structured career growth. Macedon offers more "learn by not dying."',
  },
  {
    category: 'Diversity & Inclusion',
    macedon: 'All Greeks welcome. Non-Greeks... also welcome, as long as they acknowledge Greek superiority. It\'s called "cultural integration."',
    rome: 'Roman citizens: full benefits. Non-citizens: auxiliary track with reduced pay and eventual citizenship. Barbarians: evaluated individually (evaluation may involve combat).',
    notes: 'Both organizations have a broad definition of "inclusion" that mostly means "we\'ll include your territory in our empire."',
  },
];

const glassdoor = [
  { rating: 4.2, org: 'Macedonian Phalanx Division', pros: 'Great leadership (Alexander), exciting travel, strong team culture', cons: 'Leader has god complex (literally thinks he\'s divine), no exit strategy, the campaign never ends' },
  { rating: 3.8, org: 'Roman Legion Division', pros: 'Excellent structure, clear career path, world-class infrastructure', cons: 'Pay could be better, 25-year commitment is rough, centurion hits you with a stick' },
];

export default function BenefitsPage() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.tag}>Compensation & Benefits</p>
          <h1>Why Fight for Less?</h1>
          <p className={styles.headerSub}>
            Whether you choose the phalanx or the legion, your compensation package includes
            glory, honor, and just enough denarii to not starve. Compare our industry-leading
            benefits below.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '2rem' }}>
            <span className="laurel-header">Head-to-Head Comparison</span>
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th className={styles.colMacedon}>&#9876; Macedon</th>
                  <th className={styles.colRome}>&#9876; Rome</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td className={styles.catCell}>
                      <strong>{row.category}</strong>
                      <span className={styles.catNote}>{row.notes}</span>
                    </td>
                    <td>{row.macedon}</td>
                    <td>{row.rome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Glassdoor */}
      <section className="section-alt">
        <div className="container text-center">
          <h2><span className="laurel-header">Forum Reviews (Glasdoor.rom)</span></h2>
          <p style={{ color: 'var(--muted-text)', marginBottom: '2rem' }}>
            Real reviews from real soldiers. Verified by the Department of Morale.
          </p>

          <div className={styles.reviewGrid}>
            {glassdoor.map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewRating}>
                  <span className={styles.ratingNum}>{review.rating}</span>
                  <span className={styles.ratingStars}>
                    {'★'.repeat(Math.floor(review.rating))}{'☆'.repeat(5 - Math.floor(review.rating))}
                  </span>
                </div>
                <h3>{review.org}</h3>
                <div className={styles.reviewSection}>
                  <strong className={styles.prosLabel}>Pros:</strong>
                  <p>{review.pros}</p>
                </div>
                <div className={styles.reviewSection}>
                  <strong className={styles.consLabel}>Cons:</strong>
                  <p>{review.cons}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.reviewDisclaimer}>
            * Reviews have been screened by Imperial Censors. Negative reviews may result in &quot;voluntary reassignment&quot;
            to frontier duty. One-star reviews are classified as sedition.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>Convinced Yet?</h2>
          <p style={{ color: 'var(--muted-text)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            The benefits speak for themselves. And if they don&apos;t, the recruiter with the vine staff will speak for them.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/apply" className="btn btn-primary">Apply Now &#8594;</Link>
            <Link href="/faq" className="btn btn-outline">Read the FAQ First</Link>
          </div>
        </div>
      </section>
    </>
  );
}
