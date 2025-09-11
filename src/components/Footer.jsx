import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[]">
        {/* about */}
        <div className="flex flex-col items-start ">
          <div className="flex items-center">
            <Image 
              src="/assets/logo.svg" 
              alt="Car Doctor Logo" 
              width={40} 
              height={40} 
            />
          </div>
          <p className="mt-2 text-sm">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial...
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.582a10 10 0 11-3.363-3.364" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.582a10 10 0 11-3.363-3.364" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.582a10 10 0 11-3.363-3.364" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.582a10 10 0 11-3.363-3.364" />
              </svg>
            </a>
          </div>
        </div>

        {/* links */}
        <div className="flex flex-col sm:flex-row sm:space-x-12 lg:flex-row ">
          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-lg font-semibold">About</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Service</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Why Car Doctor</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">About</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Support Center</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Feedback</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
