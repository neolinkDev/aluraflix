import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-center mt-8 mb-8 text-slate-100">
      <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Regresa a la página principal
      </Link>
    </div>
  );
}
