"use client";

import { AppLogo } from "@/components/app-logo";
import { FooterProps } from "@/types/navigation";
import {
  IconBrandFacebook,
  IconBrandGoogleMaps,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

const defaultSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Programs", href: "/programs" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <IconBrandFacebook className='size-5' />,
    href: "https://www.facebook.com/kanlongfoundation",
    label: "Facebook",
  },
  {
    icon: <IconBrandInstagram className='size-5' />,
    href: "https://www.instagram.com/kanlongfoundation/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR2erAcn5TGLybR3-hi4aYvoHZOOqjdUYcqi6XIOVhPuVqPMaXc9UIOPXOk",
    label: "Twitter",
  },
  {
    icon: <IconMail className='size-5' />,
    href: "mailto:kanlongfoundation@gmail.com",
    label: "GMail",
  },
  {
    icon: <IconPhone className='size-5' />,
    href: "tel:0917-633-7039",
    label: "GMail",
  },
  {
    icon: <IconBrandGoogleMaps className='size-5' />,
    href: "https://maps.app.goo.gl/joY8Vbc4WpB3Ehtt5",
    label: "LinkedIn",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "" },
  { name: "Privacy Policy", href: "" },
];

export function GuestFooter({
  logo = {
    url: "",
    src: "/assets/logo-icon.png",
    alt: "Logo",
    title: "Kanlong Foundation",
  },
  description = "Non-stock, non-profit organization that responds to the needs of Filipino differently-abled children.",
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
}: FooterProps) {
  return (
    <footer className='bg-sidebar px-4 pt-8 text-white'>
      <div className='mx-auto lg:max-w-7xl'>
        <div className='flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left'>
          <div className='flex w-full flex-col justify-between gap-6 lg:items-start'>
            {/* Logo */}
            {/* <div className='flex items-center gap-2 lg:justify-start'> */}
            <AppLogo />
            {/* <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className='size-8 rounded-lg'
                />
              </a>
              <h2 className='text-xl font-semibold'>{logo.title}</h2> */}
            {/* </div> */}
            <p className='max-w-lg text-sm'>{description}</p>
            <ul className='flex items-center space-x-6'>
              {socialLinks.map((social, idx) => (
                <li key={idx} className='hover:text-primary font-medium'>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target='_blank'
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='grid w-full gap-6 lg:gap-20'>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className='lg:place-self-center'>
                <h3 className='mb-4 font-bold'>{section.title}</h3>
                <ul className='space-y-3 text-sm'>
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className='hover:text-primary font-medium'
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left'>
          <p className='order-2 lg:order-1'>
            &copy; {new Date().getFullYear()} KanlongFoundation.com. All rights
            reserved.
          </p>
          <ul className='order-1 flex flex-col gap-2 md:order-2 md:flex-row'>
            {legalLinks.map((link, idx) => (
              <li key={idx} className='hover:text-primary'>
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
