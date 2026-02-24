import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'FAQ — Gloria Aeterna Recruiting',
  description: 'Frequently asked questions about serving in the Macedonian Phalanx or Roman Legions.',
};

const faqs = [
  {
    q: 'Is death in battle covered by insurance?',
    a: 'Death IS the insurance. A glorious death in battle is the ultimate benefit — eternal honor, your name remembered by historians (maybe), and your family receives your back pay (minus equipment deposit). For anything less than death, our healthcare plan is "pray to the gods and see the medicus." The medicus has a saw and good intentions.',
  },
  {
    q: 'What\'s the work-life balance like?',
    a: 'There is no life outside the legion. The legion IS your life. Some would call this "poor work-life balance." We call it "total institutional commitment." You eat with the legion, sleep with the legion, march with the legion. The only time you\'re not with the legion is when you\'re dead, at which point work-life balance becomes irrelevant.',
  },
  {
    q: 'Can I bring my family?',
    a: 'Your family is the Empire. Legionaries are forbidden from marrying during service (25 years). This policy exists because the Senate believes romantic attachments weaken military discipline. Many soldiers maintain "unofficial" relationships in camp towns, which we pretend not to notice. Upon retirement, you may marry your camp wife and legitimize your camp children. It\'s a beautiful system.',
  },
  {
    q: 'I\'ve heard the Gauls are actually quite formidable. Should I be concerned?',
    a: 'This question has been flagged by the Department of Morale and Information Control. The Gauls are disorganized barbarians who fight naked and cannot form a proper line. Any reports to the contrary are enemy propaganda. That said, if you encounter a Gaul named Vercingetorix, please report to your centurion immediately. No reason. Just... report it.',
  },
  {
    q: 'What happens if I want to leave before my 25-year contract is up?',
    a: 'The technical term for early termination is "desertion," and the penalty is death. If your entire unit wishes to leave, the penalty is "decimation" — every tenth man is selected by lot and beaten to death by the other nine. This policy has a 100% retention rate among survivors. We consider it our most effective HR initiative.',
  },
  {
    q: 'Is there a path to Roman citizenship for non-citizens?',
    a: 'Absolutely! Simply serve 25 years as an auxiliary, survive all campaigns, maintain good conduct, and upon honorable discharge you will receive a bronze diploma granting citizenship to you and your children. It\'s the ancient equivalent of an H-1B visa, if the H-1B required you to fight Germanic tribesmen for a quarter century.',
  },
  {
    q: 'What\'s the food like?',
    a: 'Primarily wheat porridge (puls), hard bread (bucellatum), and posca (vinegar water that we legally cannot call wine). Occasionally you will forage for supplements, which is a polite way of saying "take food from local populations." Vegetarians are accommodated by default, as meat is rare. Vegans will find the leather armor situation philosophically challenging.',
  },
  {
    q: 'Do you have a diversity and inclusion policy?',
    a: 'We are deeply committed to diversity. The Roman Empire includes people from Britannia, Hispania, Africa, Syria, and dozens of other territories. All are welcome to serve, pay taxes, and adopt Roman customs. Our inclusion policy is simple: everyone is included in the Empire, whether they want to be or not. This is the most inclusive institution in history.',
  },
  {
    q: 'What if I\'m not good at fighting?',
    a: 'The beauty of the Roman legion is that individual skill matters less than collective discipline. Can you stand in a line? Can you hold a shield? Can you poke a sword forward when told? Congratulations, you\'re qualified. The phalanx is even simpler: hold the pike, push forward, don\'t drop the pike. We\'ve simplified warfare to its most accessible form.',
  },
  {
    q: 'Why should I choose Macedon over Rome (or vice versa)?',
    a: 'This is a deeply personal decision. Macedon offers: a charismatic leader with a god complex, exotic Eastern campaigns, and the thrill of being part of an 18-foot pike formation. Rome offers: structure, career progression, excellent infrastructure, and the comfort of knowing your empire will last at least 500 years (Western branch terms and conditions apply). Both offer the satisfaction of spreading civilization to people who didn\'t ask for it.',
  },
  {
    q: 'I saw a one-star review on Glasdoor.rom. Should I be concerned?',
    a: 'That review has been investigated by Imperial Censors and the author has been reassigned to permanent frontier duty in Caledonia. We maintain a 4.0+ rating across all divisions, and reviews below three stars are classified as seditious material under the Lex Majestatis. If you have concerns, please submit them through proper channels (your centurion), who will address them (with his vine staff).',
  },
  {
    q: 'Is it true that Alexander thinks he\'s a god?',
    a: 'Alexander IS a god. The Oracle at Siwa confirmed this. Moving on.',
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.tag}>Information Bureau</p>
          <h1>Frequently Asked Questions</h1>
          <p className={styles.headerSub}>
            Pre-approved answers to your pre-approved questions.
            If your question is not listed below, it has been deemed irrelevant by the Department of Morale.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section">
        <div className="container">
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <div className={styles.faqQ}>
                  <span className={styles.faqNum}>{['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][i]}.</span>
                  {faq.q}
                </div>
                <div className={styles.faqA}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-alt">
        <div className="container text-center">
          <h2><span className="laurel-header">Still Have Questions?</span></h2>
          <p style={{ color: 'var(--muted-text)', margin: '1rem auto 0.5rem', maxWidth: 500 }}>
            You shouldn&apos;t. The information provided above is comprehensive and imperially approved.
            However, if you insist on having additional questions, you may:
          </p>
          <div className={styles.contactOptions}>
            <div className={styles.contactCard}>
              <h3>&#128230; Send a Pigeon</h3>
              <p>Address your wax tablet to:<br /><strong>Gloria Aeterna HR<br />Via Appia, Mile Marker XLII<br />Attn: Department of Morale</strong></p>
            </div>
            <div className={styles.contactCard}>
              <h3>&#128260; Smoke Signal</h3>
              <p>Available during business hours (dawn to dusk). Three short puffs for general inquiries. Two long puffs for complaints (not recommended).</p>
            </div>
            <div className={styles.contactCard}>
              <h3>&#9876; Visit in Person</h3>
              <p>Walk-ins welcome at any legionary camp. Please approach with hands visible and in a non-threatening manner. Password: &quot;Roma Invicta.&quot;</p>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/apply" className="btn btn-primary">
              Stop Asking Questions, Start Conquering &#8594;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
