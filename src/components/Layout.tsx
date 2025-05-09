export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Chris's Piano Care</title>
        <meta
          name="description"
          content="Piano tuning done with care and precision."
        />
      </head>
      <body className="bg-[#fdfaf6] text-gray-800 font-sans">
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
