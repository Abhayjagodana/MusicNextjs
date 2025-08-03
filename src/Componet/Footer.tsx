"use client";
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                
                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-sm text-gray-300">
                        This music school is a premier institution dedicated to learning the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <Link href="/"><a className="hover:text-teal-400">Home</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a className="hover:text-teal-400">About</a></Link>
                        </li>
                        <li>
                            <Link href="/courses"><a className="hover:text-teal-400">Courses</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a className="hover:text-teal-400">Contact</a></Link>
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Instagram</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm text-gray-300">New Delhi, India - 10001</p>
                    <p className="text-sm text-gray-300">
                        Email: <a href="mailto:jagodanaabhay@gmail.com" className="hover:text-teal-400">jagodanaabhay@gmail.com</a>
                    </p>
                    <p className="text-sm text-gray-300">
                        Phone: <a href="tel:6353772828" className="hover:text-teal-400">6353772828</a>
                    </p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Jagodana Music School. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
