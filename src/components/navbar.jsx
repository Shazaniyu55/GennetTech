import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '' },
  { name: 'Team', href: '' },
  { name: 'Contact', href: '' },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
   <>
   <header className="absolute top-0 left-0 right-0 z-50 bg-[#1E4E79] shadow-md">
      <nav aria-label="Global" className="flex items-center justify-between px-6 py-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Gennet Tech Solutions Ltd</span>
            <img
              alt="Gennet Tech Solutions Ltd"
              src="/assets/logo.png"
              className="h-12 w-12 rounded-full"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#F57C00]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
              {item.name}
            </a>
          ))}
        </div>

        {/* Book Now button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
          <a  href="/book"
            className="text-sm/6 font-semibold text-white bg-[#F57C00] hover:bg-blue-600 px-3 py-2 rounded-lg"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1E4E79] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Gennet Tech Solutions Ltd</span>
              <img
                alt="Gennet Tech Solutions Ltd"
                src="/assets/logo.png"
                className="h-12 w-12 rounded-full"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  
                   <a key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                
                <a  href="/book"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white bg-[#F57C00] hover:bg-blue-600"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
   </>
  );
}

