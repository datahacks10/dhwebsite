import Link from "next/link";

export default function BlogPost3() {
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo">
            <Link href="/" className="text-2xl font-bold text-blue-600">Datahacks</Link>
          </div>
          <ul className="flex space-x-8">
            <li><Link href="/blog" className="text-blue-600 font-semibold">Blog</Link></li>
            <li><Link href="/#services" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link href="/#about" className="hover:text-blue-600 transition-colors">About</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
            ← Back to Blog
          </Link>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">CI/CD</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">DevOps</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Automation</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Modern CI/CD Pipelines: Best Practices
              </h1>
              
              <div className="flex items-center text-gray-600 text-sm">
                <span>By Datahacks Team</span>
                <span className="mx-2">•</span>
                <time dateTime="2025-01-05">January 5, 2025</time>
                <span className="mx-2">•</span>
                <span>12 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Continuous Integration and Continuous Deployment (CI/CD) pipelines are the backbone of modern software development. Well-designed pipelines can dramatically improve deployment frequency, reduce lead time, and increase system reliability.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">The Evolution of CI/CD</h2>
              <p>
                Traditional software releases were manual, error-prone, and infrequent. Modern CI/CD practices enable teams to deploy multiple times per day with confidence. This transformation requires:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Automated testing at every stage</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Comprehensive monitoring and observability</li>
                <li>Feature flags and progressive rollouts</li>
                <li>Automated rollback capabilities</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Pipeline Architecture Fundamentals</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Stage Design</h3>
              <p>
                A well-structured pipeline consists of distinct stages, each with specific responsibilities:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Build Stage</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Code compilation</li>
                      <li>• Dependency management</li>
                      <li>• Static code analysis</li>
                      <li>• Security scanning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Test Stage</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unit tests</li>
                      <li>• Integration tests</li>
                      <li>• Contract tests</li>
                      <li>• Performance tests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Deploy Stage</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Environment provisioning</li>
                      <li>• Application deployment</li>
                      <li>• Smoke tests</li>
                      <li>• Health checks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Monitor Stage</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Performance monitoring</li>
                      <li>• Error tracking</li>
                      <li>• User analytics</li>
                      <li>• Business metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Testing Strategy</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Test Pyramid Implementation</h3>
              <p>
                Follow the test pyramid principle to balance test coverage with execution speed:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-center mb-4">
                  <div className="inline-block">
                    <div className="bg-red-200 p-2 mb-1 text-sm">E2E Tests (Few)</div>
                    <div className="bg-yellow-200 p-2 mb-1 text-sm w-32">Integration Tests (Some)</div>
                    <div className="bg-green-200 p-2 text-sm w-48">Unit Tests (Many)</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li><strong>Unit Tests (70%):</strong> Fast, isolated, comprehensive coverage</li>
                  <li><strong>Integration Tests (20%):</strong> API contracts, database interactions</li>
                  <li><strong>E2E Tests (10%):</strong> Critical user journeys, UI workflows</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Parallel Test Execution</h3>
              <p>
                Optimize pipeline speed by running tests in parallel:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Example GitHub Actions parallel testing
name: CI Pipeline
on: [push, pull_request]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm ci
      - run: npm run test:unit

  integration-tests:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: test
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run test:integration`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Deployment Strategies</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Blue-Green Deployments</h3>
              <p>
                Minimize downtime and risk by maintaining two identical production environments:
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Implementation Steps:</h4>
                <ol className="list-decimal ml-6 space-y-2">
                  <li>Deploy new version to inactive environment (Green)</li>
                  <li>Run comprehensive tests against Green environment</li>
                  <li>Switch traffic from Blue to Green</li>
                  <li>Monitor metrics and health checks</li>
                  <li>Keep Blue environment ready for quick rollback</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Canary Releases</h3>
              <p>
                Gradually roll out changes to a subset of users to minimize blast radius:
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li><strong>Phase 1:</strong> Deploy to 5% of traffic</li>
                  <li><strong>Phase 2:</strong> Increase to 25% if metrics are healthy</li>
                  <li><strong>Phase 3:</strong> Scale to 50% after validation</li>
                  <li><strong>Phase 4:</strong> Complete rollout to 100%</li>
                </ul>
                <p className="mt-4 text-sm">Automated rollback triggers: Error rate > 1%, Response time > 500ms, or custom business metrics</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Infrastructure as Code</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Environment Consistency</h3>
              <p>
                Use IaC tools to ensure environment parity across development, staging, and production:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Example Terraform configuration
resource "aws_ecs_service" "app" {
  name            = "\${var.environment}-\${var.app_name}"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = var.environment == "production" ? 3 : 1
  
  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 100
  }
  
  load_balancer {
    target_group_arn = aws_lb_target_group.app.arn
    container_name   = var.app_name
    container_port   = 3000
  }
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Security Integration</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Shift-Left Security</h3>
              <p>
                Integrate security scanning early in the pipeline to catch vulnerabilities before production:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li><strong>Static Application Security Testing (SAST):</strong> Code analysis for security flaws</li>
                <li><strong>Dependency Scanning:</strong> Check for vulnerable dependencies</li>
                <li><strong>Container Scanning:</strong> Scan Docker images for vulnerabilities</li>
                <li><strong>Infrastructure Scanning:</strong> Validate cloud configurations</li>
              </ul>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Security Gates</h4>
                <p>Implement automated security gates that fail the pipeline if:</p>
                <ul className="list-disc ml-6">
                  <li>High or critical vulnerabilities are detected</li>
                  <li>Security compliance checks fail</li>
                  <li>Secrets are exposed in code</li>
                  <li>Container images are unsigned or unverified</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Monitoring and Observability</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Pipeline Metrics</h3>
              <p>
                Track key metrics to continuously improve your CI/CD process:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Speed Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Build time</li>
                      <li>• Test execution time</li>
                      <li>• Deployment duration</li>
                      <li>• Lead time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Build success rate</li>
                      <li>• Test pass rate</li>
                      <li>• Deployment success rate</li>
                      <li>• Rollback frequency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Application Performance Monitoring</h3>
              <p>
                Integrate APM tools to track application health post-deployment:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Example deployment health check
deployment_health_check:
  metrics:
    - error_rate < 1%
    - response_time_p95 < 500ms
    - cpu_usage < 80%
    - memory_usage < 85%
  duration: 10m
  on_failure: 
    action: rollback
    notification: slack, email`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Patterns</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Feature Flags Integration</h3>
              <p>
                Decouple deployment from feature releases using feature flags:
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li><strong>Deploy dark:</strong> Ship code with features disabled</li>
                  <li><strong>Progressive rollout:</strong> Enable features for specific user segments</li>
                  <li><strong>A/B testing:</strong> Compare feature variants</li>
                  <li><strong>Kill switch:</strong> Instantly disable problematic features</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Multi-Environment Promotion</h3>
              <p>
                Implement promotion pipelines that advance artifacts through environments:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-4">Development → Staging → Production</p>
                <ul className="space-y-2">
                  <li>Same artifact promotes through all environments</li>
                  <li>Environment-specific configuration injected at runtime</li>
                  <li>Automated promotion based on test results</li>
                  <li>Manual approval gates for production</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Common Pitfalls and Solutions</h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">❌ Pipeline Anti-Patterns</h3>
                <ul className="space-y-3">
                  <li><strong>Flaky tests:</strong> Remove or fix unreliable tests immediately</li>
                  <li><strong>Slow feedback loops:</strong> Optimize for fast failure detection</li>
                  <li><strong>Manual interventions:</strong> Automate all repetitive tasks</li>
                  <li><strong>Environment drift:</strong> Use IaC and immutable infrastructure</li>
                  <li><strong>Shared databases:</strong> Isolate test data and environments</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Roadmap</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Week 1-2: Foundation</h4>
                  <ul className="list-disc ml-6">
                    <li>Set up basic CI pipeline with automated testing</li>
                    <li>Implement code quality gates</li>
                    <li>Configure artifact storage and versioning</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Week 3-4: Deployment Automation</h4>
                  <ul className="list-disc ml-6">
                    <li>Automate deployment to staging environment</li>
                    <li>Implement basic monitoring and health checks</li>
                    <li>Add automated rollback capabilities</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Week 5-8: Advanced Features</h4>
                  <ul className="list-disc ml-6">
                    <li>Implement blue-green or canary deployment strategy</li>
                    <li>Add comprehensive security scanning</li>
                    <li>Integrate feature flags and progressive rollouts</li>
                    <li>Set up advanced monitoring and alerting</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
              <p>
                Modern CI/CD pipelines are complex systems that require careful design and continuous optimization. Start with the basics—automated testing and deployment—then gradually add advanced features like canary releases and comprehensive monitoring.
              </p>

              <p>
                Remember that the goal is not just automation, but reliable, fast, and safe software delivery. Invest in pipeline reliability as much as application reliability, and treat your CI/CD infrastructure as a critical system that enables your entire engineering organization.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="font-semibold mb-2">Ready to modernize your CI/CD pipelines?</p>
                <p>Our DevOps experts can assess your current processes and design robust, scalable pipelines tailored to your technology stack and organizational needs. <Link href="/#contact" className="text-blue-600 hover:text-blue-700">Contact us</Link> to accelerate your deployment capabilities.</p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Datahacks. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}