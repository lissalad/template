import Image from "next/image";
import ancientPhoto from "../public/images/ancient.jpg";

export default function Home() {
  return (
    <>
      {/* ---------- intro banner ----------- */}
      <div className="text-center">
        <h1 className="text-sm font-semibold text-sky-500">Showcase</h1>
        <p className="mt-6 text-5xl leading-none font-bold tracking-tight text-gray-900">
          This is a very functional website.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Thank you for visiting our website for important deals and bargains{" "}
          <br className="hidden md:block" />
          at your local starbucks actually chai tea.
        </p>
      </div>

      {/* ---------- grid ----------- */}
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-16">
        {new Array(9).fill(0).map((_, index) => (
          <li
            key={index}
            className="bg-gray-50 hover:bg-gray-100 rounded-3xl p-6 border border-black/10"
          >
            <div className="relative aspect-video">
              <Image src={ancientPhoto} className="rounded-md" alt="" fill />
            </div>

            <div className="mt-4">
              <h2 className="text-sm leading-6 text-gray-900 font-semibold">
                Destination
              </h2>
              <p className="leading-6 text-gray-500 text-sm">Travel here</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
