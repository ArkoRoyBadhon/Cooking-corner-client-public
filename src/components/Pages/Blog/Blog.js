import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto text-center my-12'>
            <div className="collapse rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border bg-emerald-300">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content bg-slate-200 text-left">
                    <ul className=''>
                        <li>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database</li>
                        <li>Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable</li>
                        <li>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data</li>
                    </ul>
                </div>
            </div>
            <div className="collapse rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border bg-emerald-300">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-slate-200 text-left">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed</p>
                    <p>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                        User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
            </div>
            <div className="collapse rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border bg-emerald-300">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-slate-200 text-left">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                </div>
            </div>
            <div className="collapse rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border bg-emerald-300">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-slate-200">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;