import { useLanguage } from "@/context/LanguageContext";
import { Sparkles } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border mt-24 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center text-center">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <p className="text-muted-foreground text-sm font-medium">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
