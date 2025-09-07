import { Link } from "react-router-dom";

export default function Home() {
  const demos = [
    { title: "Modelo Linktree", path: "/links" },
    { title: "Modelo Apresentação", path: "/apresentacao" },
    { title: "Funil com Quiz", path: "/funnel" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">FastWebBr - Modelos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {demos.map((demo) => (
          <Link
            key={demo.path}
            to={demo.path}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold">{demo.title}</h2>
            <p className="text-gray-500 mt-2">Clique para ver exemplo</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
