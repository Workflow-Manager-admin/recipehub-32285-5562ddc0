"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // TODO: Integrate with backend API: POST /login
    setTimeout(() => {
      if (form.username === "user" && form.password === "pass") {
        router.push("/");
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 800);
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Username"
          required
          value={form.username}
          onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
        />
        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
        />
        <button
          type="submit"
          className="bg-[#74B49B] text-white px-4 py-2 rounded mt-2 font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <span className="text-red-500">{error}</span>}
      </form>
    </section>
  );
}
