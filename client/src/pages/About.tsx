import { Leaf, Recycle, ShieldCheck, Award, Users, MapPin, Package, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n";

const certifications = [
  {
    icon: Leaf,
    labelKey: "about.cert.ph",
    descriptionKey: "about.cert.ph.desc",
    fallbackLabel: "pH Neutral",
    fallbackDescription:
      "Toutes nos formules sont équilibrées pour respecter le pH naturel de votre peau et de vos cheveux.",
  },
  {
    icon: Recycle,
    labelKey: "about.cert.recycled",
    descriptionKey: "about.cert.recycled.desc",
    fallbackLabel: "Recycled Plastic",
    fallbackDescription:
      "Nous utilisons des emballages en plastique recyclé pour réduire notre impact environnemental.",
  },
  {
    icon: ShieldCheck,
    labelKey: "about.cert.derm",
    descriptionKey: "about.cert.derm.desc",
    fallbackLabel: "Dermatologically Tested",
    fallbackDescription:
      "Chaque produit est testé dermatologiquement pour garantir une tolérance optimale.",
  },
  {
    icon: Award,
    labelKey: "about.cert.iso",
    descriptionKey: "about.cert.iso.desc",
    fallbackLabel: "ISO 22000",
    fallbackDescription:
      "Notre système de management de la sécurité alimentaire est certifié selon la norme internationale.",
  },
];

const stats = [
  { icon: Calendar, value: "2009", labelKey: "about.stats.year" },
  { icon: MapPin, value: "200+", labelKey: "about.stats.points" },
  { icon: Package, value: "120+", labelKey: "about.stats.products" },
  { icon: Users, value: "3", labelKey: "about.stats.brands" },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/30" data-testid="page-about">
      {/* Elegant header with gentle blue overlay */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-transparent to-pink-400/8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            {t("about.header.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light opacity-90">
            {t("about.header.subtitle")}
          </p>
        </div>
      </section>

      {/* LYS INTENSE Passion Story – Subtle blue-tinted glass */}
      <section className="py-20 md:py-24 bg-white/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-pink-400 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 md:p-20 shadow-2xl border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-blue-700 via-blue-500 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
                {t("about.story.title")}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-center md:text-left">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats – Gentle blue glow on premium glass */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center group">
                <div className="relative w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-blue-500/15 via-pink-400/15 to-purple-500/15 backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 ring-1 ring-white/10">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/20 to-transparent blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
                  <stat.icon className="w-10 h-10 text-pink-400 relative z-10 drop-shadow-sm" />
                </div>
                <p className="text-5xl font-black bg-gradient-to-r from-blue-700 to-pink-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-gray-600 mt-3 font-medium">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Presentation – Soft blue accents in layout */}
      <section className="py-24 md:py-32 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
                {t("about.presentation.title")}
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>{t("about.presentation.p1")}</p>
                <p>{t("about.presentation.p2")}</p>
                <p>{t("about.presentation.p3")}</p>
                <p>{t("about.presentation.p4")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-200/30">
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&h=700&fit=crop"
                  alt="Usine LRS Tunisie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments – Subtle blue-tinted cards */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
              {t("about.commitments.title")}
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {t("about.commitments.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {certifications.map((cert) => (
              <Card
                key={cert.labelKey}
                className="group hover:-translate-y-2 transition-all duration-500 border-0 shadow-xl hover:shadow-2xl bg-white/90 backdrop-blur-sm border-white/20"
              >
                <CardContent className="pt-12 pb-10 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500/15 to-pink-400/15 flex items-center justify-center group-hover:scale-110 transition-transform ring-1 ring-white/10">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/20 to-transparent blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                    <cert.icon className="w-12 h-12 text-pink-400 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {t(cert.labelKey) === cert.labelKey ? cert.fallbackLabel : t(cert.labelKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed px-4">
                    {t(cert.descriptionKey) === cert.descriptionKey ? cert.fallbackDescription : t(cert.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Mission – Luxurious closing with blue depth */}
      <section className="py-24 md:py-32 bg-blue-200 text-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide drop-shadow-md">
            {t("about.mission.title")}
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-5xl mx-auto opacity-90">
            {t("about.mission.body")}
          </p>
        </div>
      </section>
    </div>
  );
}