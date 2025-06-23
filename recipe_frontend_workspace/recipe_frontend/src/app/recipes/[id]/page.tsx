"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Recipe = {
  id: string;
  title: string;
  summary?: string;
  instructions?: string;
};

export default function RecipeDetailPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  // Placeholder: Replace with backend API call integration.
  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      // TODO: Integrate with backend API: GET /recipes/:id
      setRecipe({
        id,
        title: "Spaghetti Carbonara",
        summary: "Classic Italian pasta dish.",
        instructions: "1. Boil pasta. 2. Cook bacon. 3. Toss with cheese & eggs."
      });
      setLoading(false);
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4 text-gray-700">{recipe.summary}</p>
      <section aria-label="Instructions" className="prose">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.instructions}</p>
      </section>
    </article>
  );
}
