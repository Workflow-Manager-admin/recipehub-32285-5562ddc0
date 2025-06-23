"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    // TODO: Integrate with backend API: POST /register
    setTimeout(() => {
      router.push("/login");
      setLoading(false);
    }, 900);
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Register</h1>
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
        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Confirm Password"
          required
          value={form.confirm}
          onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
        />
        <button
          type="submit"
          className="bg-[#74B49B] text-white px-4 py-2 rounded mt-2 font-semibold"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <span className="text-red-500">{error}</span>}
      </form>
    </section>
  );
}
