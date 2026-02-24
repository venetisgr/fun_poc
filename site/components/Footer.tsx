import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.col}>
            <h4>SPQR Holdings LLC</h4>
            <p>
              &quot;Making the world Roman, one province at a time.&quot;
            </p>
            <p className={styles.small}>
              A wholly-owned subsidiary of Macedon-Rome Imperial Ventures
            </p>
          </div>

          <div className={styles.col}>
            <h4>Campaigns</h4>
            <ul>
              <li><Link href="/macedon">Macedonian Phalanx Division</Link></li>
              <li><Link href="/legion">Roman Legion Division</Link></li>
              <li><Link href="/benefits">Compensation & Loot</Link></li>
              <li><Link href="/apply">Submit Application</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/faq">Frequently Asked Questions</Link></li>
              <li><span>Cookie Policy (for tracking Gauls)</span></li>
              <li><span>Terms of Servitude</span></li>
              <li><span>Decimation Clause</span></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <p>Carrier Pigeon: <strong>Eagle VII</strong></p>
            <p>Forum Address: <strong>Via Appia, Mile Marker XLII</strong></p>
            <p>Smoke Signal Hours: <strong>Dawn to Dusk</strong></p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>
            &copy; DCCLIII AUC &ndash; Present &middot; SPQR Holdings LLC &middot; All Rights Reserved Under Imperial Law
          </p>
          <p className={styles.disclaimer}>
            Not affiliated with any actual empire, living or deceased. Past conquering performance does not guarantee
            future territorial gains. SPQR Holdings is an equal opportunity employer for all citizens. Non-citizens
            may apply for auxiliary positions. Barbarian applicants will be evaluated on a case-by-case basis
            (cases may involve gladiatorial combat).
          </p>
        </div>
      </div>
    </footer>
  );
}
