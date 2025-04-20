'use client';

import PageSkeleton from '../_components/core/PageSkeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <PageSkeleton activePage="contact">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in touch!</h1>
      <p className="text-lg mb-3 md:w-1/2">
        I{"'"}d love to hear from you! Whether you have a question, want to
        collaborate, or just want to say hello, feel free to reach out.
      </p>
      <a
        href="mailto:contact@fxfey.dev"
        className="text-lg hover:text-blue-500 transition-colors flex items-center mb-6 w-fit"
      >
        <FontAwesomeIcon icon={faPaperPlane} size="sm" className="mr-2" />
        contact@fxfey.dev
      </a>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Find me online:</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/benfyfe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Fxfey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </PageSkeleton>
  );
}
