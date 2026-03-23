import { CATEGORIES, CategoryId } from "@/data/tools";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: CategoryId | "all";
  setSelectedCategory: (c: CategoryId | "all") => void;
}

export function CategoryFilter({ selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12 px-4 max-w-5xl mx-auto">
      <button
        onClick={() => setSelectedCategory("all")}
        className={cn(
          "px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 relative",
          selectedCategory === "all" 
            ? "text-primary-foreground shadow-lg shadow-primary/25" 
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        {selectedCategory === "all" && (
          <motion.div 
            layoutId="activeCategory" 
            className="absolute inset-0 bg-primary rounded-xl -z-10" 
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">{t("filter.all")}</span>
      </button>

      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isSelected = selectedCategory === cat.id;
        
        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 relative",
              isSelected 
                ? "text-primary-foreground shadow-lg shadow-primary/25" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {isSelected && (
              <motion.div 
                layoutId="activeCategory" 
                className="absolute inset-0 bg-primary rounded-xl -z-10" 
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Icon className="w-4 h-4" />
              {t(`cat.${cat.id}`)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
