import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Kubernetes",
      excerpt: "Learn how to design and deploy microservices architecture using Kubernetes for enterprise-scale applications.",
      date: "2025-01-15",
      author: "Datahacks Team",
      tags: ["Kubernetes", "Microservices", "DevOps"]
    },
    {
      id: 2,
      title: "AWS Cost Optimization Strategies for Enterprise",
      excerpt: "Discover proven techniques to reduce your AWS infrastructure costs while maintaining performance and reliability.",
      date: "2025-01-10",
      author: "Datahacks Team",
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
    {
      id: 3,
      title: "Modern CI/CD Pipelines: Best Practices",
      excerpt: "Implementing robust continuous integration and deployment pipelines that scale with your development team.",
      date: "2025-01-05",
      author: "Datahacks Team",
      tags: ["CI/CD", "DevOps", "Automation"]
    },
    {
      id: 4,
      title: "Database Performance Tuning for High-Traffic Applications",
      excerpt: "Optimize your database performance to handle millions of requests with minimal latency and maximum reliability.",
      date: "2024-12-28",
      author: "Datahacks Team",
      tags: ["Database", "Performance", "Optimization"]
    },
    {
      id: 5,
      title: "Security Best Practices for Cloud Infrastructure",
      excerpt: "Essential security measures to protect your cloud infrastructure from threats and ensure compliance.",
      date: "2024-12-20",
      author: "Datahacks Team",
      tags: ["Security", "Cloud", "Compliance"]
    },
    {
      id: 6,
      title: "Monitoring and Observability in Distributed Systems",
      excerpt: "Implement comprehensive monitoring solutions to gain visibility into your distributed systems and applications.",
      date: "2024-12-15",
      author: "Datahacks Team",
      tags: ["Monitoring", "Observability", "Systems"]
    }
  ];

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
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Technical Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and best practices for enterprise development and infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Want to stay updated with our latest insights?</p>
            <Link 
              href="/#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Subscribe to Updates
            </Link>
          </div>
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