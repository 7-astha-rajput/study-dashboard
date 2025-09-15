import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} required />
          <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
          <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
          <Input label="Confirm Password" type="password" name="confirm" value={form.confirm} onChange={handleChange} required />
          <Button type="submit" fullWidth>Register</Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/" className="text-indigo-600 font-medium">Login</a>
        </p>
      </div>
    </div>
  );
}
