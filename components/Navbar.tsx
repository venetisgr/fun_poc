'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.eagle}>&#9765;</span>
          <span className={styles.logoText}>
            Gloria Aeterna<span className={styles.logoSub}>Recruiting</span>
          </span>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li><Link href="/macedon" onClick={() => setMenuOpen(false)}>The Phalanx</Link></li>
          <li><Link href="/legion" onClick={() => setMenuOpen(false)}>The Legion</Link></li>
          <li><Link href="/benefits" onClick={() => setMenuOpen(false)}>Benefits</Link></li>
          <li><Link href="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>
          <li><Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
          <li>
            <Link href="/apply" className={styles.applyBtn} onClick={() => setMenuOpen(false)}>
              Enlist Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
