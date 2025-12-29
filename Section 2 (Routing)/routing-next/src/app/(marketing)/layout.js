export const metadata = {
  title: `Marketing`,
};

export default function RootLayout({ children }) {
  return (
    <>
      <header className="bg-white/50 text-black">Marketing header</header>
      <h1>Root layout</h1>
      {children}

      <footer className="bg-teal-500 text-black">Marketing footer</footer>
    </>
  );
}
