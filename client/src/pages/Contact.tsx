import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useLanguage } from "@/i18n";

const contactInfoBase = [
  {
    icon: MapPin,
    labelKey: "contact.info.address.label",
    valueKey: "footer.address",
    href: null as string | null,
  },
  {
    icon: Phone,
    labelKey: "contact.info.phone.label",
    valueKey: "footer.phone",
    href: "tel:+21674680235",
  },
  {
    icon: MessageCircle,
    labelKey: "contact.info.whatsapp.label",
    valueKey: "footer.whatsapp",
    href: "https://wa.me/21626565555",
  },
  {
    icon: Mail,
    labelKey: "contact.info.email.label",
    valueKey: "footer.email",
    href: "mailto:admin@lrs.com",
  },
  {
    icon: Clock,
    labelKey: "contact.info.hours.label",
    valueKey: "contact.info.hours.value",
    href: null as string | null,
  },
];

const socialLinks = [
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/laboratoiresLRS",
    handle: "@Lys.Intense",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://instagram.com/lys_intense",
    handle: "@lys_intense",
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const contactInfo = contactInfoBase.map((item) => ({
    ...item,
    label: t(item.labelKey),
    value: t(item.valueKey),
  }));
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40" data-testid="page-contact">
      {/* Elegant header with subtle blue accent */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-8 drop-shadow-md">
            {t("contact.header.title")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-900/80 max-w-4xl mx-auto font-light leading-relaxed">
            {t("contact.header.subtitle.1")}<br />
            {t("contact.header.subtitle.2")}
          </p>
        </div>
      </section>

      {/* Main content – clean, premium two-column layout */}
      <section className="py-20 md:py-32 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Form – using your already premium ContactForm */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact info & social – refined with elegant blue touches */}
            <div className="space-y-16 order-1 lg:order-2">
              {/* Contact details */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-10">
                  {t("contact.info.title")}
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-6 group" data-testid={`contact-info-${info.label.toLowerCase()}`}>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 border border-blue-200/30">
                        <info.icon className="w-7 h-7 text-blue-700" />
                      </div>
                      <div className="pt-1">
                        <p className="text-sm font-medium text-blue-600/80 uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-xl font-semibold text-blue-900">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links – premium glassmorphic cards with blue accent */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-10">
                  {t("contact.social.title")}
                </h2>
                <div className="space-y-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 p-6  bg-white/70 backdrop-blur-lg border border-blue-200/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/15 to-blue-700/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-300/30">
                        <social.icon className="w-8 h-8 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-blue-900">{social.label}</p>
                        <p className="text-base text-blue-700/80">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Distribution card – premium blue gradient */}
              <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="pt-10 pb-12 px-8">
                  <div className="flex items-center gap-5 mb-6">
                    <Globe className="w-12 h-12" />
                    <h3 className="text-3xl font-extrabold">{t("contact.distribution.title")}</h3>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line">
                    {t("contact.distribution.body")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}