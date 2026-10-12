import Image from "next/image";
import Navigation from "@/components/Navigation";
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import { identity, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div id="home" className="shell">
        <Navigation />
      </div>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> FULL STACK DEVELOPER{" "}
              <span className="hero-location">/ KERALA, INDIA</span>
            </div>
            <h1 id="hero-title">
              Fayis
              <br />
              Kanthapuram<span className="orange">.</span>
            </h1>
            <p className="hero-statement">
              Thoughtful interfaces.
              <br />
              Solid engineering.
              <span className="handwritten">Real-world purpose.</span>
            </p>
            <p className="hero-description">
              I turn ideas into working software — connecting the details you
              see with the systems you don’t.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="/resume.pdf" download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href={identity.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="resume-word-link">
              Need an editable copy? <a href="/resume.docx" download>Download Word version</a>
            </p>
          </div>
          <div className="hero-art">
            <div className="portrait-frame">
              <Image
                src="/images/fayis-workspace.webp"
                alt="Fayis Kanthapuram working on his laptop"
                width={800}
                height={800}
                preload
                sizes="(max-width: 700px) 90vw, 42vw"
              />
              <div className="portrait-corner" aria-hidden="true">
                ↗
              </div>
              <span className="portrait-note">
                A DEVELOPER. ALWAYS A LEARNER.
              </span>
            </div>
            <div className="photo-caption">
              <span>
                <span className="tiny-cross">+</span> THE PERSON BEHIND THE CODE
              </span>
              <span>01 / FK</span>
            </div>
            <span className="orbit-stamp" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>
        <div className="hero-foot shell">
          <span>BUILT WITH CURIOSITY. REFINED WITH CARE.</span>
          <a href="#work">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
        <section
          id="work"
          className="work-section shell"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Ideas, made <em>real.</em>
              </h2>
            </div>
            <p>
              Different problems. One approach:
              <br />
              understand it, build it, make it better.
            </p>
          </div>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
          <div className="github-strip">
            <div>
              <span className="eyebrow">THE WORK CONTINUES</span>
              <p>There’s more in the commits.</p>
            </div>
            <a
              className="text-link"
              href={identity.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          id="about"
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="shell about-grid">
            <div className="about-aside">
              <p className="eyebrow">02 / THE PERSON</p>
              <div className="about-portrait">
                <Image
                  src="/images/fayis-portrait.webp"
                  alt="Portrait of Fayis Kanthapuram"
                  width={413}
                  height={531}
                  sizes="(max-width:700px) 160px, 260px"
                />
                <span>FAYIS, OFF THE TERMINAL.</span>
              </div>
              <p className="location-label">
                Based in Kerala, India.
                <br />
                Building for the web.
              </p>
            </div>
            <div className="about-copy">
              <h2 id="about-title">
                Curious by nature.
                <br />
                <em>Builder by choice.</em>
              </h2>
              <p className="about-lead">
                I like the moment an idea becomes something you can actually
                use.
              </p>
              <p>
                I’m Fayis, a full stack developer drawn to practical problems:
                making a checkout work, bringing clarity to a business workflow,
                or figuring out how a habit repeats without losing its history.
              </p>
              <p>
                I work across the interface, API, and database. That
                whole-picture view helps me connect the small details to the way
                an application actually behaves.
              </p>
              <p>
                My learning happens in the build: asking better questions,
                reading the code, and improving the next version.
              </p>
              <div className="learning-note">
                <span aria-hidden="true">↗</span>
                <div>
                  <strong>Currently exploring</strong>
                  <p>
                    System design, Docker, and cloud infrastructure — building
                    on my full-stack foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="approach"
          className="approach-section shell"
          aria-labelledby="approach-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / HOW I BUILD</p>
              <h2 id="approach-title">
                Care, at every <em>layer.</em>
              </h2>
            </div>
            <p>
              A good interface is only the beginning.
              <br />
              The decisions underneath matter just as much.
            </p>
          </div>
          <div className="approach-grid">
            <article>
              <span className="approach-icon" aria-hidden="true">
                ⌁
              </span>
              <h3>Follow the whole flow.</h3>
              <p>
                From browsing to a confirmed order, Mobiverse connects the
                interface to authentication, payments, and stock updates.
              </p>
              <a href="#mobiverse" className="text-link">
                Explore Mobiverse <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article>
              <span className="approach-icon" aria-hidden="true">
                ⊞
              </span>
              <h3>Model the real rules.</h3>
              <p>
                In Diamond Pappadam, approved production and salary payments are
                separate records. The data follows the business.
              </p>
              <a href="#diamond" className="text-link">
                Explore Diamond <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article>
              <span className="approach-icon" aria-hidden="true">
                ↻
              </span>
              <h3>Think beyond today.</h3>
              <p>
                DailyOS keeps a history of recurring schedules. A changed
                routine shouldn’t change yesterday’s progress.
              </p>
              <a href="#dailyos" className="text-link">
                Explore DailyOS <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
          <div className="toolkit">
            <p className="eyebrow">MY WORKING TOOLKIT</p>
            {skills.map((group, i) => (
              <div className="skill-row" key={group.name}>
                <span className="skill-index">0{i + 1}</span>
                <div>
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                </div>
                <p className="skill-items">{group.items}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="notebook shell" aria-labelledby="notebook-title">
          <p className="eyebrow">ON THE DRAWING BOARD</p>
          <div>
            <h2 id="notebook-title">Closer to home.</h2>
            <p>
              A concept for Wayanad Churam traffic and road updates — exploring
              how community reporting and mapping could make a familiar journey
              a little more informed.
            </p>
            <span className="concept-label">
              CONCEPT / NOT YET A LIVE APPLICATION
            </span>
          </div>
          <span className="notebook-arrow" aria-hidden="true">
            ↗
          </span>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <div className="contact-top">
              <p className="eyebrow">04 / START A CONVERSATION</p>
              <span>GOOD THINGS START WITH A HELLO.</span>
            </div>
            <div className="contact-main">
              <h2 id="contact-title">
                Have something
                <br />
                in <em>mind?</em>
              </h2>
              <a
                className="contact-arrow"
                href={`mailto:${identity.email}`}
                aria-label="Email Fayis Kanthapuram"
              >
                ↗
              </a>
            </div>
            <div className="contact-bottom">
              <p>
                A project, an opportunity, or a good technical question.
                <br />
                I’d love to hear from you.
              </p>
              <a className="email-link" href={`mailto:${identity.email}`}>
                {identity.email} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ContactForm />
            <footer>
              <a href="#home" className="footer-name">
                Fayis Kanthapuram<span>.</span>
              </a>
              <p>© {new Date().getFullYear()} Fayis Kanthapuram</p>
              <div>
                <a href={identity.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={identity.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a href={identity.twitter} target="_blank" rel="noreferrer">
                  X ↗
                </a>
                <a href="#home">Back to top ↑</a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
