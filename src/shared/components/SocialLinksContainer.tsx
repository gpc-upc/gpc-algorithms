"use client";
import {ReactElement, useEffect, useRef, useState} from "react";
import {SocialLink} from "@/src/shared/components/SocialLink";
import Image from "next/image";

export const SocialLinksContainer = (): ReactElement => {
  const [linksModalIsVisible, setLinksModalIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setLinksModalIsVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="flex">
      <button
        onClick={ () => setLinksModalIsVisible((state) => !state) }
        className="hover:bg-gray-200 dark:hover:bg-neutral-900 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
      <div
        ref={ref}
        className={`
          absolute left-[120px] bottom-2
          flex flex-col items-center
          border-2 border-gray-100
          bg-[#FFFEFF] rounded-lg w-20
          ${ !linksModalIsVisible && 'hidden' }`
        }
      >
        <SocialLink
          urlDestination="https://www.facebook.com/gpcupc/"
          icon={ <Image width={24} height={24} src="/facebook-icon.svg" alt="Facebook icon" />}
        />
        <SocialLink
          urlDestination="https://github.com/gpc-upc/"
          icon={ <Image width={24} height={24} src="/github-icon.svg" alt="Github icon" />}
        />
        <SocialLink
          urlDestination="https://www.instagram.com/gpcupc/"
          icon={ <Image width={20} height={20} src="/instagram-icon.svg" alt="Instagram icon" />}
        />
        <SocialLink
          urlDestination="https://www.youtube.com/@GPCUPC"
          icon={ <Image width={24} height={24} src="/youtube-icon.svg" alt="Youtube icon" />}
        />
        <SocialLink
          urlDestination="https://www.linkedin.com/company/programacion-competitiva-upc/"
          icon={ <Image width={22} height={22} src="/linkedin-icon.svg" alt="Linkedin icon" />}
        />
      </div>
    </div>
  );
}