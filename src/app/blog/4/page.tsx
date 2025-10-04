import Link from "next/link";

export default function BlogPost4() {
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
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Database</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Performance</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Optimization</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Database Performance Tuning for High-Traffic Applications
              </h1>
              
              <div className="flex items-center text-gray-600 text-sm">
                <span>By Datahacks Team</span>
                <span className="mx-2">•</span>
                <time dateTime="2024-12-28">December 28, 2024</time>
                <span className="mx-2">•</span>
                <span>15 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Database performance is often the bottleneck in high-traffic applications. Proper optimization techniques can improve response times by 10x while reducing infrastructure costs and improving user experience.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Database Performance</h2>
              <p>
                Database performance optimization requires a systematic approach to identify bottlenecks and apply targeted solutions. The key areas to focus on include:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Query optimization and indexing strategies</li>
                <li>Connection pooling and resource management</li>
                <li>Caching layers and data access patterns</li>
                <li>Database schema design and normalization</li>
                <li>Hardware and infrastructure tuning</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Query Optimization Fundamentals</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Indexing Strategy</h3>
              <p>
                Proper indexing is the most effective way to improve query performance. However, indexes come with trade-offs:
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Index Best Practices:</h4>
                <ul className="space-y-2">
                  <li><strong>B-Tree indexes:</strong> Best for equality and range queries</li>
                  <li><strong>Composite indexes:</strong> Order columns by selectivity (most selective first)</li>
                  <li><strong>Covering indexes:</strong> Include all columns needed by the query</li>
                  <li><strong>Partial indexes:</strong> Index only rows that meet specific conditions</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">PostgreSQL Index Example:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`-- Composite index for user queries
CREATE INDEX idx_users_status_created 
ON users (status, created_at) 
WHERE status IN ('active', 'pending');

-- Covering index to avoid table lookups
CREATE INDEX idx_orders_customer_covering 
ON orders (customer_id, created_at) 
INCLUDE (total_amount, status);

-- Partial index for active records only
CREATE INDEX idx_active_sessions 
ON user_sessions (user_id, last_activity) 
WHERE expires_at > NOW();`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Query Analysis and Optimization</h3>
              <p>
                Use database-specific tools to analyze query execution plans:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">PostgreSQL Query Analysis:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`-- Analyze query execution plan
EXPLAIN (ANALYZE, BUFFERS) 
SELECT u.username, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.username
ORDER BY order_count DESC
LIMIT 100;

-- Look for:
-- • Sequential scans on large tables
-- • Nested loops without indexes
-- • High buffer hit ratios
-- • Sort operations on large datasets`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Connection Management</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Connection Pooling</h3>
              <p>
                Database connections are expensive resources. Proper connection pooling can dramatically improve performance:
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Connection Pool Configuration:</h4>
                <ul className="space-y-2">
                  <li><strong>Pool Size:</strong> Start with 2-3x CPU cores, tune based on monitoring</li>
                  <li><strong>Max Connections:</strong> Don&apos;t exceed database max_connections limit</li>
                  <li><strong>Connection Timeout:</strong> Set reasonable timeouts (5-10 seconds)</li>
                  <li><strong>Idle Timeout:</strong> Close idle connections to free resources</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Node.js Connection Pool Example:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`// Using pg-pool for PostgreSQL
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 20,                    // Maximum pool size
  min: 5,                     // Minimum pool size
  idleTimeoutMillis: 30000,   // Close idle clients after 30s
  connectionTimeoutMillis: 10000,  // Return error after 10s
  maxUses: 7500,             // Close connection after 7500 uses
});

// Proper query execution with error handling
async function getUserOrders(userId) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT * FROM orders WHERE user_id = $1',
      [userId]
    );
    return result.rows;
  } finally {
    client.release(); // Always release the connection
  }
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Caching Strategies</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Multi-Level Caching</h3>
              <p>
                Implement caching at multiple levels to reduce database load:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Application Cache</h4>
                    <ul className="text-sm space-y-1">
                      <li>• In-memory caching (Redis/Memcached)</li>
                      <li>• Query result caching</li>
                      <li>• Session data caching</li>
                      <li>• Computed value caching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Database Cache</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Query plan caching</li>
                      <li>• Buffer pool optimization</li>
                      <li>• Materialized views</li>
                      <li>• Read replicas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cache-Aside Pattern Implementation</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`// Redis cache-aside pattern
const redis = require('redis');
const client = redis.createClient();

async function getUserProfile(userId) {
  const cacheKey = \`user:profile:\${userId}\`;
  
  // Try cache first
  try {
    const cached = await client.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.error('Cache error:', error);
    // Continue to database if cache fails
  }
  
  // Fetch from database
  const user = await db.query(
    'SELECT * FROM users WHERE id = $1',
    [userId]
  );
  
  // Cache the result (expire in 1 hour)
  if (user) {
    await client.setex(cacheKey, 3600, JSON.stringify(user));
  }
  
  return user;
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Database Schema Optimization</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Normalization vs. Denormalization</h3>
              <p>
                Balance data consistency with query performance:
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">When to Normalize:</h4>
                <ul className="space-y-2">
                  <li><strong>High write volume:</strong> Avoid update anomalies</li>
                  <li><strong>Transactional consistency:</strong> Maintain data integrity</li>
                  <li><strong>Storage optimization:</strong> Reduce data duplication</li>
                </ul>
                
                <h4 className="font-semibold mb-3 mt-4">When to Denormalize:</h4>
                <ul className="space-y-2">
                  <li><strong>Read-heavy workloads:</strong> Reduce join complexity</li>
                  <li><strong>Reporting queries:</strong> Pre-aggregate common calculations</li>
                  <li><strong>Performance requirements:</strong> Sub-second response times</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Data Type Optimization</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Choose Optimal Data Types:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`-- Use appropriate numeric types
user_id BIGINT NOT NULL,           -- Instead of VARCHAR
status SMALLINT NOT NULL,          -- Instead of VARCHAR for enums
price DECIMAL(10,2) NOT NULL,      -- Instead of FLOAT for money
created_at TIMESTAMP NOT NULL,     -- Use timezone-aware timestamps

-- Use fixed-length types when possible
country_code CHAR(2),              -- Instead of VARCHAR(2)
phone_hash CHAR(64),               -- For hashed values

-- Consider JSONB for semi-structured data
metadata JSONB,                    -- Better than separate EAV tables
preferences JSONB                  -- With GIN indexes for queries`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Read Replicas and Scaling</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Read/Write Splitting</h3>
              <p>
                Distribute read traffic across multiple database replicas:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Implementation Strategy:</h4>
                <ul className="space-y-2">
                  <li><strong>Application-level routing:</strong> Route reads to replicas in code</li>
                  <li><strong>Database proxy:</strong> Use tools like ProxySQL or PgBouncer</li>
                  <li><strong>Load balancer:</strong> Distribute connections across replicas</li>
                  <li><strong>Replication lag monitoring:</strong> Handle eventual consistency</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Application-Level Read/Write Splitting:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`class DatabaseRouter {
  constructor() {
    this.writeDb = new Pool({ host: 'primary.db.example.com' });
    this.readDbs = [
      new Pool({ host: 'replica1.db.example.com' }),
      new Pool({ host: 'replica2.db.example.com' }),
      new Pool({ host: 'replica3.db.example.com' })
    ];
  }
  
  getReadConnection() {
    // Round-robin or random selection
    const index = Math.floor(Math.random() * this.readDbs.length);
    return this.readDbs[index];
  }
  
  getWriteConnection() {
    return this.writeDb;
  }
  
  async executeQuery(sql, params, isWrite = false) {
    const db = isWrite ? this.getWriteConnection() : this.getReadConnection();
    return await db.query(sql, params);
  }
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Monitoring and Alerting</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Performance Metrics</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Response Time Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Average query time</li>
                      <li>• 95th percentile response time</li>
                      <li>• Slow query count</li>
                      <li>• Lock wait time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resource Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• CPU utilization</li>
                      <li>• Memory usage</li>
                      <li>• Disk I/O</li>
                      <li>• Connection count</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Automated Performance Monitoring</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`-- PostgreSQL monitoring queries
-- Long-running queries
SELECT pid, now() - pg_stat_activity.query_start AS duration, query
FROM pg_stat_activity
WHERE (now() - pg_stat_activity.query_start) > interval '5 minutes';

-- Index usage statistics
SELECT schemaname, tablename, attname, n_distinct, correlation
FROM pg_stats
WHERE schemaname = 'public'
ORDER BY n_distinct DESC;

-- Cache hit ratio
SELECT 
  sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) AS cache_hit_ratio
FROM pg_statio_user_tables;`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Performance Testing</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Load Testing Strategy</h3>
              <p>
                Test database performance under realistic load conditions:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Testing Scenarios:</h4>
                <ul className="space-y-2">
                  <li><strong>Baseline testing:</strong> Normal traffic patterns</li>
                  <li><strong>Peak load testing:</strong> Expected maximum concurrent users</li>
                  <li><strong>Stress testing:</strong> Beyond expected capacity</li>
                  <li><strong>Endurance testing:</strong> Sustained load over time</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Benchmarking Tools</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# PostgreSQL built-in benchmark
pgbench -i -s 100 testdb  # Initialize with 100 scale factor
pgbench -c 10 -j 2 -t 1000 testdb  # 10 clients, 2 threads, 1000 transactions

# Custom workload testing with wrk
wrk -t12 -c400 -d30s --script=api-test.lua http://localhost:3000/api/users

# Monitor during testing
iostat -x 1  # I/O statistics
top -p \$(pgrep postgres)  # CPU and memory usage`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Common Performance Issues</h2>
              
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">🚨 Performance Anti-Patterns</h3>
                <ul className="space-y-3">
                  <li><strong>N+1 queries:</strong> Use joins or batch queries instead of loops</li>
                  <li><strong>Missing indexes:</strong> Index foreign keys and query conditions</li>
                  <li><strong>Oversized result sets:</strong> Always use LIMIT and pagination</li>
                  <li><strong>Inefficient joins:</strong> Optimize join order and conditions</li>
                  <li><strong>Blocking operations:</strong> Avoid long-running transactions</li>
                  <li><strong>Unused indexes:</strong> Remove indexes that aren&apos;t used</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Database-Specific Optimizations</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">PostgreSQL Tuning</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# postgresql.conf optimizations
shared_buffers = 4GB                    # 25% of total RAM
effective_cache_size = 12GB             # 75% of total RAM
work_mem = 256MB                        # Per-operation memory
maintenance_work_mem = 1GB              # For VACUUM, CREATE INDEX
checkpoint_completion_target = 0.9      # Spread checkpoint I/O
wal_buffers = 64MB                      # Write-ahead log buffers
random_page_cost = 1.1                  # For SSD storage
effective_io_concurrency = 200          # For SSD storage`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">MySQL/MariaDB Tuning</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# my.cnf optimizations
innodb_buffer_pool_size = 4G            # 70-80% of RAM
innodb_buffer_pool_instances = 4        # One per GB of buffer pool
innodb_log_file_size = 1G              # For write-heavy workloads
innodb_flush_log_at_trx_commit = 2     # Flush log every second
innodb_flush_method = O_DIRECT         # Bypass OS cache
query_cache_type = 0                   # Disable query cache (deprecated)
tmp_table_size = 256M                  # In-memory temp tables
max_heap_table_size = 256M             # Memory engine tables`}
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
              <p>
                Database performance optimization is an iterative process that requires continuous monitoring, testing, and refinement. Start with the fundamentals—proper indexing and query optimization—then move to advanced techniques like caching and read replicas.
              </p>

              <p>
                Remember that premature optimization can be counterproductive. Focus on measuring actual performance bottlenecks before implementing complex solutions. The goal is sustainable performance that scales with your application growth.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold mb-3">Quick Performance Checklist:</h4>
                <ul className="space-y-1">
                  <li>✅ Monitor slow queries and execution plans</li>
                  <li>✅ Implement proper indexing strategy</li>
                  <li>✅ Use connection pooling</li>
                  <li>✅ Add caching layers where appropriate</li>
                  <li>✅ Consider read replicas for read-heavy workloads</li>
                  <li>✅ Regular database maintenance (VACUUM, ANALYZE)</li>
                  <li>✅ Load test with realistic data volumes</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="font-semibold mb-2">Need help optimizing your database performance?</p>
                <p>Our database experts can analyze your current setup, identify bottlenecks, and implement performance improvements that scale with your growth. <Link href="/#contact" className="text-blue-600 hover:text-blue-700">Contact us</Link> for a performance assessment.</p>
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