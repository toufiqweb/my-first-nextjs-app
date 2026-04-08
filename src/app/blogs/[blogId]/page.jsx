import Link from "next/link";
import React from "react";

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
const page = async ({ params }) => {
  const blog = await params;
  const { blogId } = blog;

  

  const matchedBlog = blogs.find((blog) => blog.id === parseInt(blogId));
  console.log(matchedBlog);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Category + Read Time */}
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
            <span className="badge badge-primary">{matchedBlog.category}</span>
            <span>{matchedBlog.readTime} read</span>
          </div>

          {/* Title */}
          <h2 className="card-title text-2xl md:text-3xl font-bold mt-2">
            {matchedBlog.title}
          </h2>

          {/* Author + Date */}
          <p className="text-sm text-gray-400">
            By <span className="font-medium">{matchedBlog.author}</span> •{" "}
            {matchedBlog.date}
          </p>

          {/* Description */}
          <p className="mt-3 text-gray-600">{matchedBlog.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {matchedBlog.tags.map((tag, index) => (
              <span key={index} className="badge badge-outline">
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Content */}
          <p className="text-base leading-relaxed text-gray-700">
            {blog.content}
          </p>

          {/* Action Button */}
          <div className="card-actions justify-center mt-4">
            <Link href={"/blogs"} className="btn btn-primary">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
