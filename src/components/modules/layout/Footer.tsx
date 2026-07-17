// components/Footer.tsx
import { FooterData } from '@/data/footer-data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-ink text-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {FooterData?.brand?.logo}
              <span className="font-bold text-lg">{FooterData.brand.name}</span>
            </div>
            <p className="text-sm text-sand-100/60 leading-relaxed">
              {FooterData.brand.description}
            </p>
          </div>

          {/* Dynamic Sections (Categories, Cities, Contact) */}
          {FooterData.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>

              {/* Render Links if they exist */}
              {section.links && (
                <ul className="space-y-2.5 text-sm text-sand-100/60">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="hover:text-sand-50 transition-colors focus-ring"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Render Info if links don't exist (for Contact Us) */}
              {section.info && (
                <ul className="space-y-2.5 text-sm text-sand-100/60">
                  {section.info.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Social Media Section */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4">ما را دنبال کنید</h3>
            <div className="flex gap-3">
              {FooterData.socials.map((social, sIdx) => (
                <Link
                  key={sIdx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-sand-50/10 flex items-center justify-center hover:bg-sand-50/20 transition-colors focus-ring text-sand-100"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sand-50/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-100/50">
          <p>{FooterData.copyright}</p>
          <div className="flex gap-4">
            {FooterData.legalLinks.map((legal, idx) => (
              <Link
                key={idx}
                href={legal.href}
                className="hover:text-sand-100 transition-colors focus-ring"
              >
                {legal.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
