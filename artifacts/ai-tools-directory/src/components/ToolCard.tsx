import { Tool } from "@/data/tools";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function ToolCard({ tool }: { tool: Tool }) {
  const { language, t } = useLanguage();
  const Icon = tool.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-inner ${tool.color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex gap-1.5 flex-wrap justify-end pl-4">
            {tool.categories.map(cat => (
              <span key={cat} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                {t(`cat.${cat}`)}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow">
          {tool.description[language]}
        </p>
      </div>

      <div className="px-6 pb-6 mt-auto">
        <a 
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-medium text-sm bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-md"
        >
          {t("card.visit")}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
