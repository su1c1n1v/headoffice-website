import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';
import { ReactComponent as Whatsapp } from '../assets/icons/whatsapp.svg';
import { ReactComponent as Email } from '../assets/icons/email.svg';

interface IconsProps {
  classname?: string;
}

export default function Icons({ classname }: IconsProps) {
  return (
    <div className={classname}>
      <a
        href="http://instagram.com/_u/hoheadoffice/"
        className="fill-gray-primary hover:fill-yellow-secondary md:w-6 w-8  m-auto"
        target="_blank"
      >
        <Instagram />
      </a>

      <a
        href=""
        className="text-gray-primary hover:text-yellow-secondary md:w-6 w-8  m-auto"
        target="_blank"
      >
        <Facebook />
      </a>

      <a
        href=""
        className="fill-gray-primary hover:fill-yellow-secondary m-auto"
        target="_blank"
      >
        <Linkedin className="md:w-6 w-8 " />
      </a>

      <a
        href="https://wa.me/+351911064568"
        className="fill-gray-primary hover:fill-yellow-secondary md:w-6 w-8  m-auto"
        target="_blank"
      >
        <Whatsapp />
      </a>

      <a
        href="mailto: abc@example.com"
        className="fill-gray-primary hover:fill-yellow-secondary md:w-6 w-8  m-auto"
        target="_blank"
      >
        <Email />
      </a>
    </div>
  );
}
