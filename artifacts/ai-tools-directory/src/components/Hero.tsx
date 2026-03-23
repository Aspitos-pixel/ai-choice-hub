import { Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  const { t } = useLanguage();

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-90 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t("hero.badge")}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground drop-shadow-sm">
          {t("hero.title")}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div className="relative max-w-xl mx-auto group">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl group-focus-within:bg-primary/30 transition-all duration-500" />
          <div className="relative flex items-center bg-background rounded-2xl border-2 border-border group-focus-within:border-primary/50 shadow-lg overflow-hidden transition-all duration-300">
            <Search className="w-6 h-6 ml-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search.placeholder")}
              className="w-full bg-transparent px-4 py-4 outline-none text-foreground placeholder:text-muted-foreground font-medium"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
