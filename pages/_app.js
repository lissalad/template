import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* ---------- header ----------- */}
      <header className="sticky z-50 top-0 bg-black/10 w-full flex flex-row justify-between px-8 py-4 border-b border-black/30 backdrop-blur-lg">
        <a>Lissa Appreciates Alex</a>
        <div className="flex flex-row space-x-8">
          <nav>
            <ul className="flex flex-row space-x-8">
              <li>blog</li>
              <li>frog</li>
              <li>clog</li>
            </ul>
          </nav>
          <div className="h-full w-px bg-black/30" />
          <div>
            <a>g</a>
          </div>
        </div>
      </header>

      {/* ---------- main ----------- */}
      <main className="mt-16 px-8">
        <Component {...pageProps} />;
      </main>

      {/* ---------- footer ----------- */}
      <footer></footer>
    </>
  );
}

export default MyApp;
