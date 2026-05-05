import './App.css'

const navItems = ['AI Agents', 'AI Models', 'MCP Servers', 'AI Pipelines', 'AI Datastores', 'AI Technologies', 'Service Catalog']

const platformBreakdown = [
  { name: 'OpenAI Platform', value: 131, color: '#0b5fe8' },
  { name: 'AWS', value: 12, color: '#76a8ff' },
]

const topTechnologies = [
  { icon: '✹', name: 'AWS Bedrock Foundation Model', count: 53 },
  { icon: '☁', name: 'Azure OpenAI Model (Azure)', count: 33 },
  { icon: '▲', name: 'Azure OpenAI Foundation Model (Azure)', count: 20 },
  { icon: '⌘', name: 'Hosted AI Model', count: 11 },
  { icon: 'G', name: 'GCP Vertex AI Foundation Model', count: 9 },
  { icon: '◎', name: 'OpenAI Foundation Model', count: 1 },
]

const resources = [
  { resource: 'Inbox Triage Agent', type: 'AI Agent', tech: 'Gmail + Calendar OAuth', category: 'Connected App', subscription: 'Production Workspace', id: 'standing-write-scope' },
  { resource: 'Claude-opus-4-5', type: 'AI Model', tech: 'GCP Vertex AI Foundation', category: 'AI Model', subscription: 'AWS Demo Scenarios 2', id: '00178988277' },
  { resource: 'Llama 3.1 70B Instruct', type: 'AI Model', tech: 'AWS Bedrock Foundation Model', category: 'AI Model', subscription: 'AWS Demo Scenarios 2', id: '00178988277' },
  { resource: 'gpt-5.2-pro', type: 'AI Model', tech: 'OpenAI Foundation Model', category: 'AI PaaS', subscription: 'AWS Demo Scenarios 2', id: '00178988277' },
  { resource: 'models/embedding_model.onnx', type: 'AI Model', tech: 'Hosted AI Model', category: 'AI Models', subscription: 'ACME-PROD-ENV', id: 'acme-prod-env' },
  { resource: 'sora-2', type: 'AI Model', tech: 'Azure OpenAI Foundation Model (Azure)', category: 'AI Model', subscription: 'wiz-Demo-Scenarios', id: 'fea3535b-9f1e-48ef-a475' },
]

const risks = [
  { label: 'Critical identities', value: 7 },
  { label: 'Shadow agents', value: 11 },
  { label: 'Long-lived credentials', value: 24 },
  { label: 'Policy violations', value: 18 },
]

function App() {
  return (
    <main className="console-shell">
      <div className="blue-bar" aria-hidden="true"><span>✦</span></div>
      <aside className="inventory-nav" aria-label="AI Security inventory">
        <div className="product-context"><span>for</span><strong>✥ AI Security</strong></div>
        <p className="nav-section">Inventory</p>
        <nav>
          {navItems.map((item, index) => (
            <a href="#" className={index === 1 ? 'selected' : ''} key={item}>
              <span className="nav-icon">{['♙', '⌘', '◈', '▰', '▱', '◇', '▭'][index]}</span>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <section className="resource-page">
        <header className="page-header">
          <div>
            <h1>AI Security Resources</h1>
            <p>Inventory of agent identities, models, MCP servers, credentials, and connected cloud resources.</p>
          </div>
          <div className="header-actions">
            <button>Export</button>
            <button className="primary">Review risks</button>
          </div>
        </header>

        <section className="risk-strip" aria-label="Risk summary">
          {risks.map((risk) => (
            <article key={risk.label}>
              <span>{risk.label}</span>
              <strong>{risk.value}</strong>
            </article>
          ))}
        </section>

        <section className="summary-grid">
          <article className="card platform-card">
            <div className="card-title">
              <h2>Breakdown by Resource Type</h2>
              <div><button aria-label="Add">＋</button><button aria-label="More">⋮</button></div>
            </div>
            <div className="donut-layout">
              <div className="donut" aria-label="143 resources"><span>143</span><small>Resources</small></div>
              <div className="legend">
                {platformBreakdown.map((item) => (
                  <div key={item.name}><i style={{ background: item.color }} /> <span>{item.name}</span><b>{item.value}</b></div>
                ))}
              </div>
            </div>
          </article>

          <article className="card tech-card">
            <div className="card-title">
              <h2>Top Technologies</h2>
              <div><button aria-label="Add">＋</button><button aria-label="More">⋮</button></div>
            </div>
            <ul className="tech-list">
              {topTechnologies.map((tech) => (
                <li key={tech.name}>
                  <span className="tech-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                  <b>{tech.count}</b>
                  <small>▦</small>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="card table-card">
          <div className="resource-table" role="table" aria-label="AI resources table">
            <div className="table-head" role="row">
              <span>Resource</span><span>Technology</span><span>Subscription</span><span>Risk</span>
            </div>
            {resources.map((row, index) => (
              <div className="table-row" role="row" key={`${row.resource}-${row.id}`}>
                <div className="resource-cell">
                  <span className="resource-icon">⌘</span>
                  <div><strong>{row.resource}</strong><small>{row.type}</small></div>
                </div>
                <div className="technology-cell">
                  <span className="cloud-icon">{['G', 'G', '✹', '◎', '⌘', '▲'][index]}</span>
                  <div><strong>{row.tech}</strong><small>{row.category}</small></div>
                </div>
                <div className="subscription-cell"><strong>{row.subscription}</strong><small>{row.id}</small></div>
                <div><span className={`risk-pill ${index === 0 ? 'critical' : index < 3 ? 'medium' : 'low'}`}>{index === 0 ? 'Critical' : index < 3 ? 'Medium' : 'Low'}</span></div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
