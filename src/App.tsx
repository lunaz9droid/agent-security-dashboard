import './App.css'

const postureMetrics = [
  { label: 'Discovered identities', value: '128', detail: 'agents, MCP servers, service accounts' },
  { label: 'Shadow agents', value: '11', detail: 'unregistered workloads found this week' },
  { label: 'Long-lived credentials', value: '24', detail: 'tokens older than policy allows' },
  { label: 'Critical fixes', value: '7', detail: 'high-impact remediations ready' },
]

const lifecycle = [
  {
    phase: 'Discover',
    title: 'Map every agent identity',
    copy: 'Continuously inventory AI agents, MCP servers, tokens, apps, owners, and business context.',
    stats: '128 identities',
  },
  {
    phase: 'Secure',
    title: 'Prioritize risky access paths',
    copy: 'Detect excessive privileges, vulnerable configuration, abnormal activity, and policy drift.',
    stats: '7 critical risks',
  },
  {
    phase: 'Deploy',
    title: 'Provision safe-by-design agents',
    copy: 'Issue short-lived credentials with just-in-time, precisely scoped access at creation time.',
    stats: '4 policy templates',
  },
]

const graphNodes = [
  { name: 'Inbox Triage', type: 'Agent', risk: 'critical', x: 8, y: 28 },
  { name: 'Gmail', type: 'App', risk: 'warning', x: 38, y: 12 },
  { name: 'Calendar', type: 'App', risk: 'safe', x: 66, y: 28 },
  { name: 'OAuth token', type: 'Credential', risk: 'critical', x: 42, y: 62 },
  { name: 'User PII', type: 'Data', risk: 'warning', x: 72, y: 70 },
]

const findings = [
  {
    severity: 'Critical',
    title: 'Inbox Triage has standing Gmail write scope',
    impact: 'Can send or delete messages without just-in-time approval.',
    fix: 'Replace with read-only default + approval-gated send.',
  },
  {
    severity: 'High',
    title: 'Release Bot token can edit workflows',
    impact: 'Workflow write access exceeds release automation needs.',
    fix: 'Split CI read access from deploy-time workflow access.',
  },
  {
    severity: 'Medium',
    title: 'Research Runner missing owner metadata',
    impact: 'Unclear accountability for web/file access decisions.',
    fix: 'Assign owner and environment policy.',
  },
]

const inventory = [
  { name: 'Inbox Triage', owner: 'Ops', env: 'Prod', access: 'Gmail write, Calendar read', age: '92d', score: 61 },
  { name: 'Release Bot', owner: 'Eng', env: 'Prod', access: 'GitHub repo + workflow', age: '18d', score: 78 },
  { name: 'Luna Main', owner: 'Jay', env: 'Personal', access: 'Telegram, local tools', age: 'JIT', score: 94 },
  { name: 'Research Runner', owner: 'Unassigned', env: 'Lab', access: 'Web, files', age: '31d', score: 72 },
]

const policies = [
  { label: 'Approval gates', value: 86 },
  { label: 'Short-lived credentials', value: 64 },
  { label: 'SecretRef protection', value: 92 },
  { label: 'Memory boundaries', value: 81 },
]

const templates = ['Read-only research agent', 'GitHub release agent', 'Inbox triage agent', 'Customer support agent']

function riskClass(score: number) {
  if (score < 70) return 'critical'
  if (score < 85) return 'warning'
  return 'safe'
}

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Agent Control Plane navigation">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <strong>Agent Control</strong>
            <span>Identity security</span>
          </div>
        </div>

        <nav className="nav-links">
          {['Command center', 'Discover', 'Secure', 'Deploy', 'Access graph', 'Audit log'].map((item, index) => (
            <a className={index === 0 ? 'active' : ''} href="#" key={item}>{item}</a>
          ))}
        </nav>

        <section className="sidebar-card">
          <p className="eyebrow">Default policy</p>
          <strong>Zero standing write access</strong>
          <span>Agents receive scoped credentials only when the task requires them.</span>
        </section>
      </aside>

      <section className="workspace">
        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI agent identity security</p>
            <h1>Secure every agent identity before it acts.</h1>
            <p>
              Discover shadow agents, trace their access paths, remediate excessive privileges, and deploy new agents with short-lived, policy-driven credentials.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Review critical risks</button>
              <button className="secondary-button">Deploy governed agent</button>
            </div>
          </div>

          <article className="posture-card">
            <p className="eyebrow">Fleet posture</p>
            <div className="posture-score"><span>88</span><small>/100</small></div>
            <p>Strong coverage, but production email agents still have standing privileges.</p>
          </article>
        </header>

        <section className="metric-grid" aria-label="Posture metrics">
          {postureMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className="lifecycle-grid" aria-label="Discover secure deploy lifecycle">
          {lifecycle.map((item) => (
            <article className="lifecycle-card" key={item.phase}>
              <div className="phase-badge">{item.phase}</div>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
              <strong>{item.stats}</strong>
            </article>
          ))}
        </section>

        <section className="dashboard-grid">
          <article className="panel access-graph-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Agent access graph</p>
                <h2>Risky path: Inbox Triage → Gmail → OAuth token → User PII</h2>
              </div>
              <button className="secondary-button compact">Open graph</button>
            </div>
            <div className="access-graph" aria-label="Agent access graph visualization">
              <svg viewBox="0 0 100 80" role="img" aria-label="Connected agent identity graph">
                <path d="M16 34 C28 20, 31 18, 42 20" />
                <path d="M48 22 C58 24, 60 28, 66 34" />
                <path d="M44 28 C42 42, 41 50, 45 61" />
                <path d="M52 64 C61 66, 65 69, 72 73" />
              </svg>
              {graphNodes.map((node) => (
                <div className={`graph-node ${node.risk}`} style={{ left: `${node.x}%`, top: `${node.y}%` }} key={node.name}>
                  <strong>{node.name}</strong>
                  <span>{node.type}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel findings-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Critical risk queue</p>
                <h2>Fix what matters first</h2>
              </div>
            </div>
            <div className="finding-list">
              {findings.map((finding) => (
                <article className={`finding ${finding.severity.toLowerCase()}`} key={finding.title}>
                  <span>{finding.severity}</span>
                  <h3>{finding.title}</h3>
                  <p>{finding.impact}</p>
                  <button>{finding.fix}</button>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="lower-grid">
          <article className="panel inventory-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Agent inventory</p>
                <h2>Identities, owners, access, credential age</h2>
              </div>
            </div>
            <div className="inventory-table">
              <div className="table-header"><span>Agent</span><span>Owner</span><span>Access</span><span>Cred age</span><span>Risk</span></div>
              {inventory.map((agent) => (
                <div className="table-row" key={agent.name}>
                  <strong>{agent.name}<small>{agent.env}</small></strong>
                  <span>{agent.owner}</span>
                  <span>{agent.access}</span>
                  <span>{agent.age}</span>
                  <b className={riskClass(agent.score)}>{agent.score}</b>
                </div>
              ))}
            </div>
          </article>

          <article className="panel policy-panel">
            <p className="eyebrow">Policy coverage</p>
            <h2>Guardrails applied</h2>
            {policies.map((policy) => (
              <div className="policy-row" key={policy.label}>
                <div><span>{policy.label}</span><strong>{policy.value}%</strong></div>
                <meter min="0" max="100" value={policy.value}>{policy.value}%</meter>
              </div>
            ))}
          </article>
        </section>

        <section className="deploy-strip">
          <div>
            <p className="eyebrow">Deploy secure-by-design</p>
            <h2>Start from governed agent templates</h2>
          </div>
          <div className="template-list">
            {templates.map((template) => <button key={template}>{template}</button>)}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
