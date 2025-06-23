"use client";
import { useState } from "react";
import Link from "next/link";

type Recipe = {
  id: string;
  title: string;
  summary?: string;
};

export default function RecipeSearchPage() {
  const [results, setResults] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Integrate with backend API: GET /search?query=
    setTimeout(() => {
      setResults([
        { id: "1", title: "Spaghetti Carbonara", summary: "Classic Italian pasta dish." }
      ]);
      setLoading(false);
    }, 800);
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Search Recipes</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border p-2 rounded flex-1 min-w-0"
          placeholder="Search by recipe or ingredient..."
        />
        <button
          type="submit"
          className="bg-[#FBAF5D] px-4 py-2 rounded text-white font-semibold"
          style={{ background: "#FBAF5D" }}
        >
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {results.map(r => (
            <Link href={`/recipes/${r.id}`} key={r.id} className="block border rounded p-3 hover:bg-[#f8fafc]">
              <span className="font-medium">{r.title}</span>
              <span className="block text-xs text-gray-500">{r.summary}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
