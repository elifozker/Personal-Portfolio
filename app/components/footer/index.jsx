'use client';

import { Footer } from 'flowbite-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    
    <Footer className='bg-[#f4a35a] rounded-none' container>
      <div className="w-full ">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="elifozker™"
            year={2023}
          />
          <div className="mt-2 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/elif-özker-789171260/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://github.com/elifozker"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


