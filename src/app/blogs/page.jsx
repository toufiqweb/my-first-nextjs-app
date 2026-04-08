import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React Fundamentals",
      slug: "mastering-react-fundamentals",
      author: "Taj Ahmed",
      category: "Web Development",
      tags: ["React", "JavaScript", "Frontend"],
      date: "2026-04-01",
      readTime: "6 min",
      coverImage: "https://example.com/images/react-blog.jpg",
      description:
        "Learn the core concepts of React including components, props, state, and hooks.",
      content:
        "React is a powerful JavaScript library for building user interfaces. In this blog, we explore the basics such as components, JSX, props, and state management using hooks...",
    },
    {
      id: 2,
      title: "Clean Code Tips for Developers",
      slug: "clean-code-tips",
      author: "Taj Ahmed",
      category: "Programming",
      tags: ["Clean Code", "Best Practices", "Development"],
      date: "2026-04-03",
      readTime: "5 min",
      coverImage: "https://example.com/images/clean-code.jpg",
      description:
        "Improve your coding skills by writing clean, readable, and maintainable code.",
      content:
        "Writing clean code is essential for every developer. This article covers naming conventions, function design, code structure, and best practices to improve readability...",
    },
    {
      id: 3,
      title: "Understanding JavaScript Closures",
      slug: "javascript-closures",
      author: "Taj Ahmed",
      category: "JavaScript",
      tags: ["JavaScript", "Closures", "Advanced"],
      date: "2026-04-05",
      readTime: "7 min",
      coverImage: "https://example.com/images/js-closures.jpg",
      description:
        "A deep dive into closures and how they work behind the scenes in JavaScript.",
      content:
        "Closures are one of the most powerful features in JavaScript. They allow functions to access variables from an outer scope even after the outer function has executed...",
    },
    {
      id: 4,
      title: "Building Reusable Components in React",
      slug: "reusable-react-components",
      author: "Taj Ahmed",
      category: "Frontend",
      tags: ["React", "Components", "Reusable"],
      date: "2026-04-07",
      readTime: "6 min",
      coverImage: "https://example.com/images/reusable-components.jpg",
      description:
        "Learn how to create scalable and reusable components for large React applications.",
      content:
        "Reusable components help you build scalable applications. In this blog, we discuss component design patterns, props handling, and best practices for reusability...",
    },
  ];
  return (
    <div className="text-center ">
      <h2 className="text-4xl text-yellow-300 py-10">Blogs</h2>
      <br />

      <div className="grid grid-cols-4 gap-10 container mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100  shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p className="line-clamp-2">{blog.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/blogs/${blog.id}`} className="btn btn-primary">
                  Show details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
