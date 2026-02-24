'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [hatred, setHatred] = useState(5);

  if (submitted) {
    return (
      <section className={styles.successSection}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>&#128230;</div>
          <h1>Application Received!</h1>
          <p className={styles.successMsg}>
            Your application has been dispatched via carrier pigeon (Eagle VII, Cohort III).
            Estimated delivery: 3-6 weeks, weather and falcon attacks permitting.
          </p>
          <div className={styles.successDetails}>
            <h3>What Happens Next?</h3>
            <ol>
              <li>Your pigeon will arrive at Regional Command (Via Appia, Mile Marker XLII)</li>
              <li>A centurion will review your application during his lunch break</li>
              <li>If selected, you will receive a wax tablet with your report-by date</li>
              <li>If not selected, you will receive nothing (pigeons are expensive)</li>
              <li>Failure to report on the specified date is classified as desertion</li>
            </ol>
          </div>
          <p className={styles.successSmall}>
            Application reference number: MMXXVI-{Math.floor(Math.random() * 9000 + 1000)}-SPQR
            <br />
            Please save this number. We will not remember it either.
          </p>
          <button className="btn btn-gold" onClick={() => setSubmitted(false)}>
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.tag}>Enlistment Office</p>
          <h1>Submit to Glory</h1>
          <p className={styles.headerSub}>
            Complete the form below to begin your journey from civilian to conqueror.
            All fields are mandatory. Incomplete applications will be used as kindling.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className={styles.formSection}>
              <h2>I. Personal Information</h2>

              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name (in Latin characters)</label>
                  <input type="text" id="name" placeholder="e.g., Gaius Maximus Gluteus" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="age">Age (in Roman numerals preferred)</label>
                  <input type="text" id="age" placeholder="e.g., XXIII" required />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="origin">Place of Origin</label>
                <input type="text" id="origin" placeholder="e.g., Rome, Athens, Some Barbarian Village" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="citizenship">Citizenship Status</label>
                <select id="citizenship" required>
                  <option value="">Select one...</option>
                  <option value="roman">Roman Citizen (Full Benefits)</option>
                  <option value="greek">Greek/Macedonian Subject (Honorary Status)</option>
                  <option value="allied">Allied Kingdom Subject (Reduced Benefits)</option>
                  <option value="barbarian">Barbarian (Will Be Evaluated... Physically)</option>
                  <option value="unclear">It&apos;s Complicated (Border Region)</option>
                </select>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2>II. Campaign Preference</h2>

              <div className={styles.field}>
                <label htmlFor="campaign">Preferred Campaign</label>
                <select id="campaign" required>
                  <option value="">Select one...</option>
                  <option value="macedon">Operation: Persian Freedom (Macedon Division)</option>
                  <option value="rome">Operation: Gallic Pacification (Roman Division)</option>
                  <option value="either">Surprise Me (I Trust the Empire)</option>
                  <option value="neither">Actually, I&apos;d Like to Reconsider (Not an Option)</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="position">Desired Position</label>
                <select id="position" required>
                  <option value="">Select one...</option>
                  <option value="infantry">Infantry (Standard Conquering)</option>
                  <option value="cavalry">Cavalry (Must Provide Own Horse)</option>
                  <option value="engineering">Military Engineering (Road Enthusiast)</option>
                  <option value="cultural">Cultural Integration Officer (Propaganda)</option>
                  <option value="management">Centurion Track (Management)</option>
                  <option value="auxiliary">Auxiliary (Non-Citizen Track)</option>
                </select>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2>III. Qualifications</h2>

              <div className={styles.field}>
                <label htmlFor="weapon">Primary Weapon Proficiency</label>
                <select id="weapon" required>
                  <option value="">Select one...</option>
                  <option value="gladius">Gladius (Roman Short Sword)</option>
                  <option value="pilum">Pilum (Throwing Javelin)</option>
                  <option value="sarissa">Sarissa (18-Foot Pike — Back Problems Included)</option>
                  <option value="bow">Bow & Arrow (Auxiliary Only)</option>
                  <option value="sling">Sling (Balearic Islanders Preferred)</option>
                  <option value="figure-it-out">I&apos;ll Figure It Out (Not Recommended)</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Rate Your Hatred of Barbarians (I-X)</label>
                <div className={styles.sliderWrap}>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={hatred}
                    onChange={(e) => setHatred(Number(e.target.value))}
                    className={styles.slider}
                  />
                  <div className={styles.sliderLabels}>
                    <span>I (Mild Disdain)</span>
                    <span className={styles.sliderVal}>{['I','II','III','IV','V','VI','VII','VIII','IX','X'][hatred - 1]}</span>
                    <span>X (Cato-Level)</span>
                  </div>
                </div>
                {hatred >= 8 && (
                  <p className={styles.sliderNote}>
                    Excellent. The Senate approves of your enthusiasm. Carthago delenda est.
                  </p>
                )}
                {hatred <= 3 && (
                  <p className={styles.sliderNote} style={{ color: 'var(--blood-red)' }}>
                    Concerning. Your file has been flagged for review by the Department of Loyalty.
                  </p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="experience">Previous Conquering Experience</label>
                <textarea
                  id="experience"
                  rows={4}
                  placeholder="Describe any previous military campaigns, bar fights, or neighborhood disputes that demonstrate your combat readiness..."
                />
              </div>

              <div className={styles.checkboxField}>
                <input type="checkbox" id="sandals" />
                <label htmlFor="sandals">I own my own sandals (caligae) and will not require a pair from the quartermaster</label>
              </div>

              <div className={styles.checkboxField}>
                <input type="checkbox" id="swim" />
                <label htmlFor="swim">I can swim across a river in full armor (required for Gallic campaign)</label>
              </div>

              <div className={styles.checkboxField}>
                <input type="checkbox" id="march" />
                <label htmlFor="march">I can march 20 miles carrying 60 pounds of equipment without complaining (complaining is optional but frowned upon)</label>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2>IV. Terms & Conditions</h2>

              <div className={styles.termsBox}>
                <p>By submitting this application, I hereby acknowledge and agree to the following:</p>
                <ul>
                  <li>My enlistment period is 25 years (Macedon) or 25 years (Rome). There is no difference.</li>
                  <li>Desertion is punishable by death. Attempted desertion is punishable by decimation of my unit (every tenth man). My unit will be told this is my fault.</li>
                  <li>I surrender all personal property to the legion/phalanx for the duration of my service.</li>
                  <li>I will not form a union. Unions are barbarian concepts.</li>
                  <li>My next of kin will be notified in the event of my death, if the pigeon survives the journey.</li>
                  <li>SPQR Holdings LLC is not responsible for any injuries, deaths, enslavements, or existential crises resulting from military service.</li>
                </ul>
              </div>

              <div className={styles.checkboxField}>
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  <strong>I have read and accept the Terms of Servitude.</strong> I understand that
                  &quot;accept&quot; is a strong word and that my alternative is being classified as a draft dodger.
                </label>
              </div>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              &#9876; Submit to Glory &#9876;
            </button>

            <p className={styles.formDisclaimer}>
              This application is transmitted via enchanted parchment technology.
              No actual carrier pigeons were harmed. Your data will be stored on a wax tablet
              in a secure vault beneath the Temple of Saturn. GDPR does not apply (it won&apos;t exist for 2,000 years).
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
