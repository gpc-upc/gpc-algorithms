import {ReactElement} from "react";

type SocialLinkProps = {
  urlDestination: string;
  icon: ReactElement;
}

export const SocialLink = ({ urlDestination, icon }: SocialLinkProps): ReactElement => {
  return (
    <a
      href={urlDestination}
      target="_blank"
      className="flex items-center justify-center w-full hover:bg-gray-100 opacity-70 hover:opacity-100 h-12"
    >
      { icon }
    </a>
  );
}