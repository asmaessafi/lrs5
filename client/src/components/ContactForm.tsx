import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n";

export function ContactForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: t("contact.form.toast.title"),
      description: t("contact.form.toast.description"),
    });
    form.reset();
  };

  return (
    <div className="relative max-w-3xl mx-auto py-16 px-4">
      {/* Luxurious animated background glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/20 via-pink-300/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse-slow opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-pink-400/10 rounded-3xl blur-2xl" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "relative space-y-10 bg-white/90 backdrop-blur-2xl rounded-3xl p-10 md:p-16",
            "shadow-2xl shadow-blue-900/20 border border-white/40",
            "ring-1 ring-blue-200/50 overflow-hidden"
          )}
          data-testid="form-contact"
        >
          {/* Elegant header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 bg-clip-text text-transparent">
              {t("contact.form.title")}
            </h2>
            <p className="text-lg md:text-xl text-blue-900/80 font-light tracking-wide">
              {t("contact.form.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-900/90 font-semibold text-base">
                    {t("contact.form.name")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("contact.form.name.placeholder")}
                      className="h-14 rounded-2xl border-blue-200/60 bg-white/70 focus:border-pink-400 focus:ring-4 focus:ring-pink-300/30 text-blue-900 placeholder:text-blue-400/50 text-lg transition-all duration-300"
                      {...field}
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-900/90 font-semibold text-base">
                    {t("contact.form.email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("contact.form.email.placeholder")}
                      className="h-14 rounded-2xl border-blue-200/60 bg-white/70 focus:border-pink-400 focus:ring-4 focus:ring-pink-300/30 text-blue-900 placeholder:text-blue-400/50 text-lg transition-all duration-300"
                      {...field}
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                  <FormLabel className="text-blue-900/90 font-semibold text-base">
                    {t("contact.form.phone")}
                  </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                      placeholder={t("contact.form.phone.placeholder")}
                    className="h-14 rounded-2xl border-blue-200/60 bg-white/70 focus:border-pink-400 focus:ring-4 focus:ring-pink-300/30 text-blue-900 placeholder:text-blue-400/50 text-lg transition-all duration-300"
                    {...field}
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                  <FormLabel className="text-blue-900/90 font-semibold text-base">
                    {t("contact.form.message")}
                  </FormLabel>
                <FormControl>
                  <Textarea
                      placeholder={t("contact.form.message.placeholder")}
                    className="min-h-[180px] rounded-2xl border-blue-200/60 bg-white/70 focus:border-pink-400 focus:ring-4 focus:ring-pink-300/30 text-blue-900 placeholder:text-blue-400/50 text-lg resize-none transition-all duration-300 p-5"
                    {...field}
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Premium submit button */}
          <div className="pt-8">
            <Button
              type="submit"
              size="lg"
              className={cn(
                "w-full h-16 text-lg font-bold rounded-2xl",
                "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700",
                "hover:from-blue-700 hover:via-blue-500 hover:to-blue-800",
                "text-white shadow-xl hover:shadow-2xl shadow-pink-400/40",
                "transform transition-all duration-500 hover:scale-[1.02] active:scale-100",
                "group relative overflow-hidden"
              )}
              data-testid="button-submit"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Send className="mr-3 h-6 w-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-12" />
                {t("contact.form.submit")}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}