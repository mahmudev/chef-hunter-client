import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
  return (
    <div className="container my-10 mx-auto">
      <div className="">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
          Blog
        </h4>
        <div className="flex flex-col items-center">
          <p className="text-xl my-8 font-bold text-gray-800 text-center">
            Download this blog as PDF
          </p>
          <Pdf targetRef={ref} filename="blog.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn btn-warning">
                Download
              </button>
            )}
          </Pdf>
        </div>
      </div>
      <div ref={ref} className="space-y-12 px-2 xl:px-16 mt-12">
        <div className="mt-4 flex">
          <div>
            <div className="flex items-center h-16 border-l-4 border-blue-600">
              <span className="text-4xl text-blue-600 px-4">Q.</span>
            </div>
            <div className="flex items-center h-16 border-l-4 border-gray-400">
              <span className="text-4xl text-gray-400 px-4">A.</span>
            </div>
          </div>
          <div>
            <div className="flex items-center h-16">
              <span className="text-lg text-blue-600 font-bold">
                Tell us the differences between uncontrolled and controlled
                components.
              </span>
            </div>
            <div className="flex items-center py-2">
              <span className="text-gray-500">
                In the context of web development, controlled and uncontrolled
                components refer to two different ways of managing form data.
                Uncontrolled components are components that manage their own
                state internally. When a form is submitted, the component
                retrieves its data via a ref or by other means. The component
                does not rely on any external state management system.
                Controlled components, on the other hand, rely on an external
                state management system to manage their data. This is typically
                achieved through the use of callbacks and React's state
                management system. When the user interacts with the component,
                the component updates its state, which in turn updates the
                external state management system. The main difference between
                these two approaches lies in how they handle form data.
                Uncontrolled components are useful when you have simple forms
                that don't require much validation or complex interactions.
                Controlled components are more useful when you need to perform
                complex form validations or when you need to interact with
                multiple controls simultaneously. Overall, the choice between a
                controlled or uncontrolled component depends on your specific
                needs and the complexity of the form you're working with.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <div>
            <div className="flex items-center h-16 border-l-4 border-blue-600">
              <span className="text-4xl text-blue-600 px-4">Q.</span>
            </div>
            <div className="flex items-center h-16 border-l-4 border-gray-400">
              <span className="text-4xl text-gray-400 px-4">A.</span>
            </div>
          </div>
          <div>
            <div className="flex items-center h-16">
              <span className="text-lg text-blue-600 font-bold">
                How to validate React props using PropTypes?
              </span>
            </div>
            <div className="flex items-center py-2">
              <span className="text-gray-500">
                React is a popular JavaScript library used for building user
                interfaces. When building components in React, it's important to
                ensure that the props passed to a component are of the correct
                type and shape. This is where PropTypes come in. PropTypes is a
                built-in feature of React that allows developers to specify the
                expected data types and shapes of props that a component should
                receive. By validating props using PropTypes, developers can
                catch errors early on in the development process and prevent
                them from occurring in production. To use PropTypes, developers
                simply define the expected prop types for a component by adding
                a propTypes property to the component. Within this property,
                developers can use a variety of PropTypes validators to specify
                the expected data types and shapes of props. Some common
                PropTypes validators include string, number, boolean, array,
                object, and function. Additionally, there are more advanced
                PropTypes validators such as PropTypes.shape and
                PropTypes.instanceOf that allow developers to specify the exact
                structure or class of a prop. In summary, using PropTypes to
                validate React props is an essential step in building robust and
                error-free React components.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <div>
            <div className="flex items-center h-16 border-l-4 border-blue-600">
              <span className="text-4xl text-blue-600 px-4">Q.</span>
            </div>
            <div className="flex items-center h-16 border-l-4 border-gray-400">
              <span className="text-4xl text-gray-400 px-4">A.</span>
            </div>
          </div>
          <div>
            <div className="flex items-center h-16">
              <span className="text-lg text-blue-600 font-bold">
                Tell us the difference between nodejs and express js.
              </span>
            </div>
            <div className="flex items-center py-2">
              <span className="text-gray-500">
                Node.js is an open-source, cross-platform runtime environment
                for executing JavaScript code outside of a web browser. It
                allows developers to write server-side applications using
                JavaScript, which was traditionally only used for client-side
                scripting in web browsers. Express.js, on the other hand, is a
                lightweight and flexible web application framework for Node.js.
                It provides a set of features and tools for building web
                applications and APIs, including routing, middleware, view
                rendering, error handling, and more. Express.js simplifies the
                process of developing server-side applications by providing a
                clear and organized structure. In simple terms, Node.js is the
                runtime environment that executes JavaScript code, while
                Express.js is a framework built on top of Node.js that provides
                additional features and tools to make it easier to build web
                applications and APIs. To put it another way, Node.js is the
                foundation upon which Express.js is built. Developers use
                Node.js to execute JavaScript code on the server-side, and they
                use Express.js to simplify the process of building web
                applications and APIs using Node.js. In summary, while Node.js
                and Express.js are often used together to build server-side
                applications, they serve different purposes. Node.js is the
                underlying platform, while Express.js is a framework that builds
                on top of Node.js to provide additional functionality for
                building web applications and APIs.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <div>
            <div className="flex items-center h-16 border-l-4 border-blue-600">
              <span className="text-4xl text-blue-600 px-4">Q.</span>
            </div>
            <div className="flex items-center h-16 border-l-4 border-gray-400">
              <span className="text-4xl text-gray-400 px-4">A.</span>
            </div>
          </div>
          <div>
            <div className="flex items-center h-16">
              <span className="text-lg text-blue-600 font-bold">
                What is a custom hook, and why will you create a custom hook?
              </span>
            </div>
            <div className="flex items-center py-2">
              <span className="text-gray-500">
                In React, a custom hook is a JavaScript function that starts
                with the word use and allows developers to extract reusable
                logic from components. Custom hooks provide a way to share
                common functionality between different components without
                duplicating code. Custom hooks are created when a developer
                needs to use some functionality in multiple places within a
                React application. By creating a custom hook, they can put this
                shared functionality in one place and reuse it across multiple
                components. Some examples of when to create a custom hook
                include: Fetching data from an API: If multiple components need
                to fetch data from an API, a custom hook can be created to
                encapsulate this logic and make it reusable across all
                components. Handling form state: If there are multiple forms
                within a React application, a custom hook can be created to
                handle form state management and validation. Using third-party
                libraries: If a third-party library needs to be used in multiple
                components, a custom hook can be created to wrap the library's
                functionality and make it reusable across all components. In
                summary, custom hooks allow developers to extract reusable logic
                from components and encapsulate it in a single function. This
                makes it easier to share common functionality across multiple
                components and can help reduce code duplication. Developers
                create custom hooks when they need to use some functionality in
                multiple places within a React application.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
