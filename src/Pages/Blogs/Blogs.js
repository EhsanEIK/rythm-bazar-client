import React from 'react';
import prototypalInheriance from '../../assets/blogs/prototypal-inheritance.png';

const Blogs = () => {
    return (
        <div>
            {/* blog-01 */}
            <div className='bg-slate-100 rounded-lg p-10 mb-20'>
                <h2 className='md:text-3xl text-lg font-bold mb-5'>1. What are the different ways to manage a state in a React application?</h2>
                <p>There are four main types of state to properly manage the React apps:
                    <ol className='list-decimal ml-10'>
                        <li>Local state</li>
                        <li>Global state</li>
                        <li>Server state</li>
                        <li>URL state</li>
                    </ol>
                    <br />
                    <b>Local State:</b> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    <br /><br />
                    <b>Global State:</b> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    <br /><br />
                    <b>Server State:</b> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                    <br /><br />
                    <b>URL State:</b> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    <br />
                </p>
            </div>
            {/* blog-02 */}
            <div className='bg-slate-100 rounded-lg p-10 mb-20'>
                <h2 className='md:text-3xl text-lg font-bold mb-5'>2. How does prototypical inheritance work?</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                    <br />
                    When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.
                </p>
                <img className='mt-5' src={prototypalInheriance} alt="prototypalInheriance" />
            </div>
            {/* blog-03 */}
            <div className='bg-slate-100 rounded-lg p-10 mb-20'>
                <h2 className='md:text-3xl text-lg font-bold mb-5'>3. What is a unit test? Why should we write unit tests?</h2>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                    <br /><br />
                    A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base. Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.
                </p>
            </div>
        </div>
    );
};

export default Blogs;