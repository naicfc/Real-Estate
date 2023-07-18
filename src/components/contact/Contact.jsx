import React from 'react'

export default function Contacts() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="p-4 shadow-md shadow-gray-300 rounded-sm">
        <form action="" method="post">
          <h4 className="text-gray-600 mb-4">Fill Up The Form</h4>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full p-2 mb-4 shadow-sm shadow-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-2 mb-4 shadow-sm shadow-gray-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="w-full p-2 mb-4 shadow-sm shadow-gray-300"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows={3}
            cols={50}
            className="w-full p-2 mb-4 shadow-sm shadow-gray-300"></textarea>
          <button type="submit" className="py-2 px-4 bg-green-600 text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
