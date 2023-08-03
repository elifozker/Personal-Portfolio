'use client';

import { Footer } from 'flowbite-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    
    <Footer className='bg-[#12233C] rounded-none' container>
      <div className="w-full ">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="elifozker™"
            href="#"
            year={2023}
          />
          <div className="mt-2 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


