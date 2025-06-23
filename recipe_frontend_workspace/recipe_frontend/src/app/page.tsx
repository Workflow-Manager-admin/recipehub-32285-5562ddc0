"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Recipe = {
  id: string;
  title: string;
  image?: string;
  summary?: string;
};

export default function RecipeListPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  // Placeholder: Replace with backend API call integration.
  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true);
      // TODO: Integrate with backend API: GET /recipes
      const dummy = [
        { id: "1", title: "Spaghetti Carbonara", summary: "Classic Italian pasta dish.", image: "" },
        { id: "2", title: "Chicken Tikka Masala", summary: "Creamy spiced Indian curry.", image: "" }
      ];
      setRecipes(dummy);
      setLoading(false);
    }
    fetchRecipes();
  }, []);

  return (
    <section aria-label="Recipe List">
      <h1 className="text-3xl font-bold mb-4">Browse Recipes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {recipes.map(r => (
            <Link
              href={`/recipes/${r.id}`}
              key={r.id}
              className="border rounded-lg p-4 hover:shadow-md transition bg-white"
              style={{ borderColor: "#ececec", minHeight: 140 }}
            >
              <h2 className="text-xl font-semibold" style={{ color: "#374B4A" }}>
                {r.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{r.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
