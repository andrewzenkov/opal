import { useState } from 'react';

import { profile } from './profile';

export function App() {
  const [dark, setDark] = useState(false);
  const [shareStatus, setShareStatus] = useState('');

  async function share() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus('Profile link copied.');
    } catch {
      setShareStatus('Copy the address from your browser to share this profile.');
    }
  }

  return (
    <div className={dark ? 'opal dark' : 'opal'}>
      <div className="profile-page">
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label="Opal home">
            <span className="opal-gem" />
            opal<span className="wordmark-dot">.</span>
          </a>
          <nav aria-label="Profile navigation">
            <a href="#about">About</a>
            <a href="#links">Links</a>
          </nav>
          <button
            className="theme-button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Use light theme' : 'Use dark theme'}
            aria-pressed={dark}
          >
            {dark ? '☀' : '☾'}
          </button>
        </header>
        <main id="home">
          <section className="hero" aria-labelledby="profile-name">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="tiny-dot" /> A PERSONAL SPACE
              </span>
              <h1 id="profile-name">
                Hey, I’m
                <br />
                <span>{profile.name}.</span>
              </h1>
              <p className="intro">{profile.introduction}</p>
              <a className="primary-link" href="#about">
                Get to know me <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="portrait" aria-label="Illustrated monogram for Kenny">
              <div className="portrait-orbit orbit-one" />
              <div className="portrait-orbit orbit-two" />
              <span className="portrait-spark" aria-hidden="true">
                ✳
              </span>
              <div className="monogram">{profile.name.slice(0, 1)}</div>
              <div className="portrait-caption">
                <span className="tiny-dot" /> A WORK IN PROGRESS, LIKE ALL OF US.
              </div>
              <span className="portrait-number" aria-hidden="true">
                01 / HELLO
              </span>
            </div>
          </section>
          <section className="about-section" id="about" aria-labelledby="about-heading">
            <div className="section-label">
              <span>01</span> ABOUT ME
            </div>
            <div>
              <h2 id="about-heading">
                More than a name
                <br />
                on a screen.
              </h2>
              <p>{profile.about}</p>
              <div className="draft-note">Profile draft · More about Kenny coming soon.</div>
            </div>
          </section>
          <section className="links-section" id="links" aria-labelledby="links-heading">
            <div className="section-label">
              <span>02</span> ELSEWHERE
            </div>
            <div className="links-content">
              <h2 id="links-heading">Let’s stay connected.</h2>
              {profile.links.length > 0 ? (
                <div className="profile-links">
                  {profile.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              ) : (
                <p>Kenny’s links will live here. Check back soon.</p>
              )}
              <button className="share-button" onClick={() => void share()}>
                Share this profile <span aria-hidden="true">↗</span>
              </button>
              <p className="share-status" role="status">
                {shareStatus}
              </p>
            </div>
          </section>
        </main>
        <footer>
          <span>{profile.name}’s corner of the internet.</span>
          <span>
            Made with <strong>opal.</strong>
          </span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </div>
  );
}
