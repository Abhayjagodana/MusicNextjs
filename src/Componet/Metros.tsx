import React from "react";
import { Meteors } from "./ui/meteors";
function Metros() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4"> {/* Centering & Responsive */}
            <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />

               <div className="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
  <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h2>

                    <form className="space-y-5 w-full">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Your message..."
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    )
}
export default Metros