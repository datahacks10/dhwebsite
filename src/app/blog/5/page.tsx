import Link from "next/link";

export default function BlogPost5() {
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
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Security</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Cloud</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Compliance</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Security Best Practices for Cloud Infrastructure
              </h1>
              
              <div className="flex items-center text-gray-600 text-sm">
                <span>By Datahacks Team</span>
                <span className="mx-2">•</span>
                <time dateTime="2024-12-20">December 20, 2024</time>
                <span className="mx-2">•</span>
                <span>14 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Cloud security requires a fundamentally different approach than traditional on-premises security. Shared responsibility models, dynamic infrastructure, and distributed systems create new challenges that demand comprehensive security strategies.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">The Shared Responsibility Model</h2>
              <p>
                Understanding the shared responsibility model is crucial for cloud security. Cloud providers secure the infrastructure, while customers are responsible for securing their data, applications, and configurations.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Cloud Provider Responsibilities:</h4>
                <ul className="space-y-2">
                  <li>• Physical security of data centers</li>
                  <li>• Network infrastructure security</li>
                  <li>• Hypervisor and host OS security</li>
                  <li>• Service availability and redundancy</li>
                </ul>
                
                <h4 className="font-semibold mb-3 mt-4">Customer Responsibilities:</h4>
                <ul className="space-y-2">
                  <li>• Identity and access management</li>
                  <li>• Data encryption and protection</li>
                  <li>• Network traffic protection</li>
                  <li>• Operating system and application security</li>
                  <li>• Firewall and security group configuration</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Identity and Access Management (IAM)</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Principle of Least Privilege</h3>
              <p>
                Grant users and services only the minimum permissions required to perform their functions:
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">AWS IAM Policy Example:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-app-bucket/uploads/*",
      "Condition": {
        "StringEquals": {
          "s3:x-amz-server-side-encryption": "AES256"
        }
      }
    }
  ]
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Multi-Factor Authentication (MFA)</h3>
              <p>
                Enforce MFA for all administrative access and sensitive operations:
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li><strong>Hardware tokens:</strong> For highest security requirements</li>
                  <li><strong>Mobile authenticators:</strong> TOTP apps like Google Authenticator</li>
                  <li><strong>SMS backup:</strong> Only as a fallback option</li>
                  <li><strong>Conditional MFA:</strong> Based on risk factors (location, device)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Role-Based Access Control (RBAC)</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Kubernetes RBAC Configuration:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Role for development team
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: development
  name: developer
rules:
- apiGroups: [""]
  resources: ["pods", "services", "configmaps"]
  verbs: ["get", "list", "create", "update", "patch", "delete"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets"]
  verbs: ["get", "list", "create", "update", "patch"]

---
# Bind role to development team
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: developer-binding
  namespace: development
subjects:
- kind: Group
  name: development-team
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: developer
  apiGroup: rbac.authorization.k8s.io`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Network Security</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Network Segmentation</h3>
              <p>
                Implement network segmentation to limit the blast radius of potential breaches:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">VPC Architecture Best Practices:</h4>
                <ul className="space-y-2">
                  <li><strong>Public subnets:</strong> Load balancers and NAT gateways only</li>
                  <li><strong>Private subnets:</strong> Application servers and databases</li>
                  <li><strong>Database subnets:</strong> Isolated database tier</li>
                  <li><strong>Management subnet:</strong> Bastion hosts and monitoring</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Security Groups and NACLs</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Terraform Security Group Example:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Web tier security group
resource "aws_security_group" "web_tier" {
  name_prefix = "web-tier-"
  vpc_id      = aws_vpc.main.id

  # Allow HTTPS from ALB only
  ingress {
    from_port       = 443
    to_port         = 443
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  # Allow outbound to app tier
  egress {
    from_port       = 8080
    to_port         = 8080
    protocol        = "tcp"
    security_groups = [aws_security_group.app_tier.id]
  }

  # HTTPS outbound for external APIs
  egress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-tier-sg"
    Environment = var.environment
  }
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Protection</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Encryption at Rest</h3>
              <p>
                Encrypt all sensitive data stored in cloud services:
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Encryption Strategy:</h4>
                <ul className="space-y-2">
                  <li><strong>Database encryption:</strong> Use cloud-native encryption (RDS, Azure SQL)</li>
                  <li><strong>Storage encryption:</strong> Enable default encryption for S3, EBS</li>
                  <li><strong>Key management:</strong> Use cloud KMS services (AWS KMS, Azure Key Vault)</li>
                  <li><strong>Application-level encryption:</strong> For highly sensitive data</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Encryption in Transit</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">TLS Configuration Best Practices:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Nginx TLS configuration
server {
    listen 443 ssl http2;
    server_name api.example.com;

    # SSL certificate
    ssl_certificate /etc/ssl/certs/api.example.com.pem;
    ssl_certificate_key /etc/ssl/private/api.example.com.key;

    # SSL protocols and ciphers
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;

    # Security headers
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy strict-origin-when-cross-origin;
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Container and Kubernetes Security</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Container Image Security</h3>
              <p>
                Secure your container images from build to runtime:
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Container Security Checklist:</h4>
                <ul className="space-y-2">
                  <li>✅ Use minimal base images (Alpine, Distroless)</li>
                  <li>✅ Scan images for vulnerabilities</li>
                  <li>✅ Run containers as non-root users</li>
                  <li>✅ Use read-only file systems where possible</li>
                  <li>✅ Implement image signing and verification</li>
                  <li>✅ Regular image updates and patching</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Secure Dockerfile Example:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Use minimal base image
FROM node:18-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nextjs -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy application code
COPY --chown=nextjs:nodejs . .

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["npm", "start"]`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pod Security Standards</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Pod Security Policy:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`apiVersion: v1
kind: Pod
metadata:
  name: secure-app
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1001
    runAsGroup: 1001
    fsGroup: 1001
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: my-app:latest
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      runAsNonRoot: true
      capabilities:
        drop:
        - ALL
    resources:
      limits:
        memory: "256Mi"
        cpu: "500m"
      requests:
        memory: "128Mi"
        cpu: "250m"
    volumeMounts:
    - name: tmp
      mountPath: /tmp
  volumes:
  - name: tmp
    emptyDir: {}`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Secrets Management</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Secret Storage Best Practices</h3>
              <p>
                Never store secrets in code or configuration files. Use dedicated secret management services:
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">❌ What NOT to do:</h4>
                <ul className="space-y-2">
                  <li>• Hardcode secrets in source code</li>
                  <li>• Store secrets in environment variables</li>
                  <li>• Commit secrets to version control</li>
                  <li>• Use default or weak passwords</li>
                  <li>• Share secrets via email or chat</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">✅ Proper Secret Management:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# AWS Secrets Manager with Node.js
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();

async function getSecret(secretName) {
  try {
    const result = await secretsManager.getSecretValue({
      SecretId: secretName
    }).promise();
    
    return JSON.parse(result.SecretString);
  } catch (error) {
    console.error('Error retrieving secret:', error);
    throw error;
  }
}

// Usage
const dbCredentials = await getSecret('prod/database/credentials');
const connectionString = \`postgresql://\${dbCredentials.username}:\${dbCredentials.password}@\${dbCredentials.host}:5432/\${dbCredentials.database}\`;`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Monitoring and Incident Response</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Security Monitoring</h3>
              <p>
                Implement comprehensive monitoring to detect and respond to security incidents:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Key Security Metrics:</h4>
                <ul className="space-y-2">
                  <li><strong>Authentication events:</strong> Failed logins, unusual access patterns</li>
                  <li><strong>Privilege escalation:</strong> Administrative access, role changes</li>
                  <li><strong>Data access:</strong> Sensitive data queries, bulk downloads</li>
                  <li><strong>Network anomalies:</strong> Unusual traffic patterns, new connections</li>
                  <li><strong>Resource changes:</strong> Security group modifications, new users</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Automated Threat Detection</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">CloudWatch Security Alert:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# CloudWatch alarm for failed logins
aws logs create-metric-filter \\
  --log-group-name /aws/lambda/auth-service \\
  --filter-name FailedLogins \\
  --filter-pattern '[timestamp, requestId, "ERROR", "Failed login"]' \\
  --metric-transformations \\
    metricName=FailedLoginAttempts,metricNamespace=Security,metricValue=1

# Create alarm
aws cloudwatch put-metric-alarm \\
  --alarm-name "High-Failed-Login-Attempts" \\
  --alarm-description "Alert on high failed login attempts" \\
  --metric-name FailedLoginAttempts \\
  --namespace Security \\
  --statistic Sum \\
  --period 300 \\
  --threshold 10 \\
  --comparison-operator GreaterThanThreshold \\
  --evaluation-periods 1`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance and Governance</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Infrastructure as Code Security</h3>
              <p>
                Implement security controls through code to ensure consistency:
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Security Scanning in CI/CD:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# GitHub Actions security pipeline
name: Security Scan
on: [push, pull_request]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Terraform security scan
      - name: Run tfsec
        uses: aquasecurity/tfsec-action@v1.0.0
        with:
          soft_fail: false
          
      # Container security scan
      - name: Run Trivy
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'my-app:latest'
          format: 'sarif'
          output: 'trivy-results.sarif'
          
      # SAST scanning
      - name: Run CodeQL
        uses: github/codeql-action/init@v2
        with:
          languages: javascript`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Audit Logging</h3>
              <p>
                Maintain comprehensive audit logs for compliance and forensics:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li><strong>AWS CloudTrail:</strong> All API calls and resource changes</li>
                  <li><strong>VPC Flow Logs:</strong> Network traffic analysis</li>
                  <li><strong>Application logs:</strong> User activities and business events</li>
                  <li><strong>Database audit logs:</strong> Data access and modifications</li>
                  <li><strong>Container logs:</strong> Runtime security events</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Disaster Recovery and Business Continuity</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Backup Strategy</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">3-2-1 Backup Rule:</h4>
                <ul className="space-y-2">
                  <li><strong>3 copies:</strong> Original data plus 2 backups</li>
                  <li><strong>2 different media:</strong> Local and cloud storage</li>
                  <li><strong>1 offsite:</strong> Different geographic location</li>
                </ul>
                
                <h4 className="font-semibold mb-3 mt-4">Backup Testing:</h4>
                <ul className="space-y-2">
                  <li>• Regular restore testing</li>
                  <li>• Recovery time objectives (RTO)</li>
                  <li>• Recovery point objectives (RPO)</li>
                  <li>• Automated backup verification</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Security Culture and Training</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Developer Security Training</h3>
              <p>
                Build security awareness throughout your organization:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li><strong>Secure coding practices:</strong> OWASP Top 10, input validation</li>
                  <li><strong>Threat modeling:</strong> Identify and mitigate threats early</li>
                  <li><strong>Security reviews:</strong> Regular code and architecture reviews</li>
                  <li><strong>Incident response:</strong> Train teams on security procedures</li>
                  <li><strong>Regular updates:</strong> Stay current with security best practices</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Roadmap</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Phase 1: Foundation (Month 1)</h4>
                  <ul className="list-disc ml-6">
                    <li>Implement strong IAM policies and MFA</li>
                    <li>Enable encryption at rest and in transit</li>
                    <li>Configure basic network security groups</li>
                    <li>Enable audit logging (CloudTrail, flow logs)</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Phase 2: Monitoring (Month 2)</h4>
                  <ul className="list-disc ml-6">
                    <li>Set up security monitoring and alerting</li>
                    <li>Implement vulnerability scanning</li>
                    <li>Configure automated threat detection</li>
                    <li>Establish incident response procedures</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Phase 3: Advanced Security (Month 3-6)</h4>
                  <ul className="list-disc ml-6">
                    <li>Implement zero-trust architecture</li>
                    <li>Add advanced container security</li>
                    <li>Deploy security automation tools</li>
                    <li>Regular security assessments and penetration testing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
              <p>
                Cloud security is an ongoing process that requires continuous attention and improvement. Start with the fundamentals—strong identity management, encryption, and network security—then build additional layers of protection as your infrastructure matures.
              </p>

              <p>
                Remember that security is not just a technical challenge but also a cultural one. Invest in training your team, establish clear procedures, and make security everyone&apos;s responsibility. The goal is to build security into every aspect of your cloud infrastructure, not bolt it on as an afterthought.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold mb-3">Security Checklist Summary:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-1 text-sm">
                      <li>✅ Strong IAM policies with least privilege</li>
                      <li>✅ Multi-factor authentication enforced</li>
                      <li>✅ Encryption at rest and in transit</li>
                      <li>✅ Network segmentation implemented</li>
                      <li>✅ Container and Kubernetes security</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1 text-sm">
                      <li>✅ Comprehensive audit logging</li>
                      <li>✅ Security monitoring and alerting</li>
                      <li>✅ Regular vulnerability scanning</li>
                      <li>✅ Incident response procedures</li>
                      <li>✅ Regular security training</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="font-semibold mb-2">Need help securing your cloud infrastructure?</p>
                <p>Our security experts can conduct comprehensive assessments, implement robust security controls, and help you achieve compliance with industry standards. <Link href="/#contact" className="text-blue-600 hover:text-blue-700">Contact us</Link> for a security consultation.</p>
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