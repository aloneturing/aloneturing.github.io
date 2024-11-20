import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader 
        title="Contact"
        subtitle="Let's connect and create something beautiful together"
      />
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <span>contact@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MessageSquare className="w-6 h-6" />
            <span>@adityamishra</span>
          </div>
        </div>
      </div>
    </div>
  );
}