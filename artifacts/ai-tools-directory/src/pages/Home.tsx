import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ToolCard } from "@/components/ToolCard";
import { Footer } from "@/components/Footer";
import { TOOLS, CategoryId } from "@/data/tools";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { SearchX } from "lucide-react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">("all");
  const { language, t } = useLanguage();

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesCategory = selectedCategory === "all" || tool.categories.includes(selectedCategory);
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchLower) || 
        tool.description[language].toLowerCase().includes(searchLower);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, language]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="flex-grow">
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredTools.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                  <SearchX className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t("empty.title")}
                </h3>
                <p className="text-muted-foreground max-w-md">
                  {t("empty.subtitle")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
