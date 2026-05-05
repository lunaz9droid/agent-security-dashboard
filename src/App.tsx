import './App.css'

const riskSignals = [
  { label: 'Prompt injection attempts', value: 34, trend: '+12%', severity: 'high' },
  { label: 'Tool approval denials', value: 8, trend: '-4%', severity: 'medium' },
  { label: 'Secrets blocked', value: 17, trend: '+6%', severity: 'high' },
  { label: 'Unsafe external writes', value: 3, trend: '-18%', severity: 'low' },
]

const agents = [
  { name: 'Luna Main', status: 'Protected', score: 94, scope: 'Telegram + local tools' },
  { name: 'Research Runner', status: 'Review', score: 82, scope: 'Web + files' },
  { name: 'Release Bot', status: 'Protected', score: 91, scope: 'GitHub + CI' },
  { name: 'Inbox Triage', status: 'At risk', score: 68, scope: 'Gmail + Calendar' },
]

const events = [
  { time: '13:02', title: 'GitHub workflow token verified', detail: 'repo + workflow scopes detected', tone: 'success' },
  { time: '12:48', title: 'External content sandboxed', detail: 'release notes parsed as untrusted input', tone: 'success' },
  { time: '12:31', title: 'Destructive command held', detail: 'approval required before filesystem delete', tone: 'warning' },
  { time: '11:57', title: 'Memory access constrained', detail: 'private recall limited to direct session', tone: 'success' },
]

const controls = ['Least privilege tools', 'Human approval gates', 'Prompt firewall', 'SecretRef scrubbing']

function App() {
  return (
    <main className="shell">
      <aside className="rail" aria-label="Navigation">
        <div className="brand" aria-label="Agent Shield">
          <span className="brand-mark">shield</span>
          <span>Agent Shield</span>
        </div>
        <nav>
          {['Overview', 'Agents', 'Incidents', 'Policies', 'Audit log'].map((item, index) => (
            <a className={index === 0 ? 'active' : ''} href="#" key={item}>
              <span className="nav-dot" />
              {item}
            </a>
          ))}
        </nav>
        <section className="rail-card">
          <p className="eyebrow">Policy posture</p>
          <strong>Zero standing write access</strong>
          <span>External actions require explicit user intent.</span>
        </section>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Agent security dashboard</p>
            <h1>Protect autonomous work before it reaches production.</h1>
          </div>
          <button className="filled-button">Run security review</button>
        </header>

        <section className="hero-grid" aria-label="Security summary">
          <article className="score-card surface-high">
            <div className="score-ring" aria-label="Security score 91 percent">
              <span>91</span>
            </div>
            <div>
              <p className="eyebrow">Fleet trust score</p>
              <h2>Healthy, with one agent needing review</h2>
              <p className="muted">Continuous monitoring across prompts, tools, memory, secrets, and outbound channels.</p>
            </div>
          </article>

          <article className="surface risk-card">
            <p className="eyebrow">Highest risk</p>
            <h3>Inbox Triage</h3>
            <p className="muted">Calendar + email tools need narrower approval boundaries.</p>
            <div className="risk-meter"><span /></div>
          </article>
        </section>

        <section className="stats-grid" aria-label="Risk signals">
          {riskSignals.map((signal) => (
            <article className={`stat-card ${signal.severity}`} key={signal.label}>
              <p>{signal.label}</p>
              <div>
                <strong>{signal.value}</strong>
                <span>{signal.trend}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="main-grid">
          <article className="surface panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Agent inventory</p>
                <h2>Runtime posture</h2>
              </div>
              <button className="tonal-button">Export</button>
            </div>
            <div className="agent-list">
              {agents.map((agent) => (
                <div className="agent-row" key={agent.name}>
                  <div>
                    <strong>{agent.name}</strong>
                    <span>{agent.scope}</span>
                  </div>
                  <span className={`status ${agent.status.toLowerCase().replace(' ', '-')}`}>{agent.status}</span>
                  <meter min="0" max="100" value={agent.score}>{agent.score}</meter>
                  <b>{agent.score}</b>
                </div>
              ))}
            </div>
          </article>

          <article className="surface panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Live audit stream</p>
                <h2>Recent safeguards</h2>
              </div>
            </div>
            <ol className="timeline">
              {events.map((event) => (
                <li className={event.tone} key={`${event.time}-${event.title}`}>
                  <time>{event.time}</time>
                  <div>
                    <strong>{event.title}</strong>
                    <span>{event.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="control-strip" aria-label="Active controls">
          {controls.map((control) => (
            <article className="control-chip" key={control}>
              <span className="material-symbol">verified_user</span>
              <strong>{control}</strong>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default App
