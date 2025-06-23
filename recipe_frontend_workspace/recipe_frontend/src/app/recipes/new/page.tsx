"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RecipeEditorPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", summary: "", instructions: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // TODO: Integrate with backend API: POST /recipes (Create)
    setTimeout(() => {
      router.push("/");
      setLoading(false);
    }, 900);
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-lg">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Recipe Title"
          required
          value={form.title}
          onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
        />
        <textarea
          className="border p-2 rounded"
          placeholder="Brief Summary"
          required
          rows={2}
          value={form.summary}
          onChange={e => setForm(f => ({ ...f, summary: e.target.value }))}
        />
        <textarea
          className="border p-2 rounded"
          placeholder="Instructions"
          required
          rows={5}
          value={form.instructions}
          onChange={e => setForm(f => ({ ...f, instructions: e.target.value }))}
        />
        <button
          type="submit"
          className="bg-[#FBAF5D] text-white px-4 py-2 rounded mt-2 font-semibold"
        >
          {loading ? "Saving..." : "Add Recipe"}
        </button>
        {error && <span className="text-red-500">{error}</span>}
      </form>
    </section>
  );
}
