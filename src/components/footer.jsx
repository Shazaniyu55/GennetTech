import {FaFacebook,  FaTwitter, FaInstagramSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-[#1E4E79]  px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a href={"/"} className="text-3xl">
              

              <p className="text-2xl text-white">Gennet Technology</p>
            </a>
            <p className="max-w-xs mt-4 text-sm text-white">
              Quality Service At Its Best
            </p>
            <div className="flex mt-8 space-x-6 text-white">
              <a
                href=""
                target="_blank"
              >
                <FaFacebook size={20} className="hover:text-[#F57C00] hover:-translate-y-1 transition-all" />
              </a>
             
              {/* <a
                href=""
                target="_blank"
              >
                <FaaedinIn size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" />
              </a> */}
              <a href="" target="_blank">
                <FaTwitter size={20} className="hover:text-[#F57C00] hover:-translate-y-1 transition-all" />
              </a>
              <a
                href=""
                target="_blank"
              >
                <FaInstagramSquare size={20} className="hover:text-[#F57C00] hover:-translate-y-1 transition-all" />
              </a>
            </div>

            <p className="leading-loose tracking-tighter  leading-normal mt-8 text-xs text-white">
            At Gennet Tech Solutions Ltd, we specialize in professional solar panel installation and advanced CCTV security systems designed to power and protect your home or business.
        </p>
          </div>


        

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4 text-white">
            <div>
              <p className="font-medium">QUICK aS</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
              <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Home
                </a>

                <a
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </a>
              
                <a
                  href="/contact"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </a>
                
                



                
              </nav>
            </div>
            <div>
              <p className="font-medium">SERVICES</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Solar Installation
                </a>
                <a
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  CCTV Installation
                </a>
                <a
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                 Electrical Wiring
                </a>
                <a
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Street Light Installation
                </a>

               

                <a
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Tech solution Consultation
                </a>


                
               
              </nav>
            </div>
            <div>
              <p className="font-medium">COMPANY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Global Website
                </a>
                
                <a
                  href="/policy"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms & Condition
                </a>

                <a
                  href="/policy"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                
                >
                <p>+234-902-855-5593</p>
            
                </a>
                 <a
                  href="#"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                
                >
                <p>info@gennetechsolution.com</p>
            
                </a>

                
              </nav>
            </div>
            <div>
              <p className="font-medium">CITIES</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/policy"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </a>
                <a
                  href="/policy"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </a>
                
                
              </nav>
            </div>


            {/* <div>
              <p className="font-medium">IN OTHER COUNTRIES</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Austria

                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Belgium

                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  France
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Italy
                </a>


                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Luxembourg
                </a>


                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Poland
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Spain
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Portugal
                </a>
              </nav>
             
              
            </div> */}

           


           


          </div>
        </div>
        {/* <p className="mt-8 text-xs text-white">
        SPIC AND SPAN. Home & Office Cleaning is an online marketplace that matches private and commercial<br/>cushrefmers with experienced cleaners in Austria, Belgium, France, Germany, Italy, Luxembourg, Poland, Portugal,<br/> Spain, and Sweden. SPIC AND SPAN. Home & Office Cleaning is a registered trademark of A&K Ventures OÜ,<br/> a company founded in July 2016 by Karol Kaczmarek and Amadeusz Annissimo.
        </p> */}
      </div>

      
    </footer>
  );
};

export default Footer;