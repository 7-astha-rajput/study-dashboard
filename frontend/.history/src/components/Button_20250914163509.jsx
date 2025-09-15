export default function Button({ children, fullWidth, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
