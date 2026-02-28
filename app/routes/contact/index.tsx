import type { Route } from './+types';


/// REACT ROUTER FORM HANDLING EXAMPLE - NOT FUNCTIONAL YET
// import { Form } from 'react-router';

// export const action = async ({ request }: Route.ActionArgs) => {
//   const formData = await request.formData();
//   const name = formData.get('name');
//   const email = formData.get('email');
//   const subject = formData.get('subject');
//   const message = formData.get('message');

//   const errors: Record<string, string> = {};

//   if (!name || typeof name !== 'string' || name.trim().length === 0) {
//     errors.name = 'Name is required';
//   }
//   if (!email || typeof email !== 'string' || email.trim().length === 0) {
//     errors.email = 'Email is required';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = 'Invalid email address';
//   }
//   if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
//     errors.subject = 'Subject is required';
//   }
//   if(!message || typeof message !== 'string' || message.trim().length === 0) {
//     errors.message = 'Message is required';
//   }

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };
  
//   return { message: 'Form submitted successfully', data};
// };
  

const ContactPage = ({actionData }: Route.ComponentProps ) => {

  return (
    <div className="max-w-3xl mx-auto  mt-12 px-6 py-8 bg-gray-900 ">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">📨Contact Me</h2>


      <form className="space-y-6" method="post" action="https://formspree.io/f/xzdaogzn">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
 
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
         
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
