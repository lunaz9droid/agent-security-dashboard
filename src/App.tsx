import {
  Badge,
  Body1,
  Body1Strong,
  Button,
  Card,
  CardHeader,
  Caption1,
  FluentProvider,
  ProgressBar,
  Subtitle2,
  Tab,
  TabList,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Title1,
  webLightTheme,
} from '@fluentui/react-components'
import {
  Apps24Regular,
  Bot24Regular,
  BrainCircuit24Regular,
  Cloud24Regular,
  Database24Regular,
  Flowchart24Regular,
  Key24Regular,
  MoreHorizontal24Regular,
  Server24Regular,
  Shield24Regular,
  Sparkle24Filled,
  Warning24Regular,
} from '@fluentui/react-icons'
import './App.css'

const navItems = [
  { label: 'AI Agents', icon: <Bot24Regular /> },
  { label: 'AI Models', icon: <BrainCircuit24Regular /> },
  { label: 'MCP Servers', icon: <Server24Regular /> },
  { label: 'AI Pipelines', icon: <Flowchart24Regular /> },
  { label: 'AI Datastores', icon: <Database24Regular /> },
  { label: 'AI Technologies', icon: <Apps24Regular /> },
  { label: 'Service Catalog', icon: <Cloud24Regular /> },
]

const technologies = [
  { name: 'AWS Bedrock Foundation Model', count: 53, provider: 'AWS' },
  { name: 'Azure OpenAI Model', count: 33, provider: 'Azure' },
  { name: 'Azure OpenAI Foundation Model', count: 20, provider: 'Azure' },
  { name: 'Hosted AI Model', count: 11, provider: 'Private' },
  { name: 'GCP Vertex AI Foundation Model', count: 9, provider: 'GCP' },
  { name: 'OpenAI Foundation Model', count: 1, provider: 'OpenAI' },
]

const resources = [
  { resource: 'Inbox Triage Agent', type: 'AI Agent', technology: 'Gmail + Calendar OAuth', subscription: 'Production Workspace', owner: 'Ops', risk: 'Critical', score: 61 },
  { resource: 'Claude-opus-4-5', type: 'AI Model', technology: 'GCP Vertex AI Foundation', subscription: 'AWS Demo Scenarios 2', owner: 'Platform', risk: 'Low', score: 93 },
  { resource: 'Llama 3.1 70B Instruct', type: 'AI Model', technology: 'AWS Bedrock Foundation Model', subscription: 'AWS Demo Scenarios 2', owner: 'ML Eng', risk: 'Medium', score: 77 },
  { resource: 'gpt-5.2-pro', type: 'AI Model', technology: 'OpenAI Foundation Model', subscription: 'AWS Demo Scenarios 2', owner: 'Research', risk: 'Medium', score: 82 },
  { resource: 'models/embedding_model.onnx', type: 'AI Model', technology: 'Hosted AI Model', subscription: 'ACME-PROD-ENV', owner: 'Search', risk: 'Low', score: 90 },
  { resource: 'sora-2', type: 'AI Model', technology: 'Azure OpenAI Foundation Model', subscription: 'wiz-Demo-Scenarios', owner: 'Creative', risk: 'Low', score: 88 },
]

const metrics = [
  { label: 'Total resources', value: '143', icon: <Cloud24Regular /> },
  { label: 'Critical identities', value: '7', icon: <Warning24Regular /> },
  { label: 'Shadow agents', value: '11', icon: <Bot24Regular /> },
  { label: 'Long-lived credentials', value: '24', icon: <Key24Regular /> },
]

function badgeAppearance(risk: string): 'danger' | 'warning' | 'success' {
  if (risk === 'Critical') return 'danger'
  if (risk === 'Medium') return 'warning'
  return 'success'
}

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <main className="fluent-shell">
        <div className="command-bar">
          <div className="brand-lockup"><Sparkle24Filled /><span>AI Security</span></div>
          <TabList selectedValue="inventory" size="small">
            <Tab value="inventory">Inventory</Tab>
            <Tab value="risks">Risks</Tab>
            <Tab value="policies">Policies</Tab>
            <Tab value="deploy">Deploy</Tab>
          </TabList>
        </div>

        <aside className="left-nav" aria-label="Inventory navigation">
          <Caption1>for</Caption1>
          <div className="workspace-title"><Shield24Regular /><Body1Strong>AI Security</Body1Strong></div>
          <Text weight="semibold" size={300} className="nav-heading">Inventory</Text>
          <nav>
            {navItems.map((item, index) => (
              <a className={index === 1 ? 'active' : ''} href="#" key={item.label}>{item.icon}<span>{item.label}</span></a>
            ))}
          </nav>
        </aside>

        <section className="content-area">
          <header className="page-title-row">
            <div>
              <Title1>Cloud Resources</Title1>
              <Body1>Monitor AI agents, models, MCP servers, credentials, and connected app access from one Fluent 2 console.</Body1>
            </div>
            <div className="page-actions">
              <Button appearance="secondary">Export</Button>
              <Button appearance="primary" icon={<Shield24Regular />}>Review risks</Button>
            </div>
          </header>

          <section className="metric-row" aria-label="Security metrics">
            {metrics.map((metric) => (
              <Card className="metric-card" key={metric.label}>
                <div className="metric-icon">{metric.icon}</div>
                <div>
                  <Caption1>{metric.label}</Caption1>
                  <Text size={700} weight="semibold">{metric.value}</Text>
                </div>
              </Card>
            ))}
          </section>

          <section className="summary-row">
            <Card className="chart-card">
              <CardHeader header={<Subtitle2>Breakdown by Cloud Platform</Subtitle2>} action={<Button appearance="subtle" icon={<MoreHorizontal24Regular />} />} />
              <div className="chart-body">
                <div className="fluent-donut"><span>143</span><small>Resources</small></div>
                <div className="legend-list">
                  <div><i className="blue" /><Body1>OpenAI Platform</Body1><Body1Strong>131</Body1Strong></div>
                  <div><i className="light-blue" /><Body1>AWS</Body1><Body1Strong>12</Body1Strong></div>
                </div>
              </div>
            </Card>

            <Card className="tech-card">
              <CardHeader header={<Subtitle2>Top Technologies</Subtitle2>} action={<Button appearance="subtle" icon={<MoreHorizontal24Regular />} />} />
              <div className="technology-list">
                {technologies.map((tech) => (
                  <div className="technology-row" key={tech.name}>
                    <TableCellLayout media={<BrainCircuit24Regular />}>{tech.name}</TableCellLayout>
                    <Caption1>{tech.provider}</Caption1>
                    <Body1Strong>{tech.count}</Body1Strong>
                    <Apps24Regular />
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <Card className="resource-card">
            <CardHeader
              header={<Subtitle2>AI resource inventory</Subtitle2>}
              description={<Caption1>Dense operational table with ownership, subscription, risk, and posture score.</Caption1>}
              action={<Button appearance="subtle" icon={<MoreHorizontal24Regular />} />}
            />
            <Table size="small" aria-label="AI resource inventory">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Resource</TableHeaderCell>
                  <TableHeaderCell>Technology</TableHeaderCell>
                  <TableHeaderCell>Subscription</TableHeaderCell>
                  <TableHeaderCell>Owner</TableHeaderCell>
                  <TableHeaderCell>Risk</TableHeaderCell>
                  <TableHeaderCell>Score</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resources.map((row) => (
                  <TableRow key={`${row.resource}-${row.subscription}`}>
                    <TableCell><TableCellLayout media={<BrainCircuit24Regular />} description={row.type}>{row.resource}</TableCellLayout></TableCell>
                    <TableCell><TableCellLayout media={<Cloud24Regular />}>{row.technology}</TableCellLayout></TableCell>
                    <TableCell>{row.subscription}</TableCell>
                    <TableCell>{row.owner}</TableCell>
                    <TableCell><Badge appearance="filled" color={badgeAppearance(row.risk)}>{row.risk}</Badge></TableCell>
                    <TableCell><div className="score-cell"><ProgressBar value={row.score / 100} thickness="medium" /><Caption1>{row.score}</Caption1></div></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>
      </main>
    </FluentProvider>
  )
}

export default App
