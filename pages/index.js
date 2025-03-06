import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-lg p-6 flex justify-between items-center fixed top-0 w-full z-50">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">Aurum Family Services</h1>
        <nav className="space-x-8 text-lg">
          <Link href="/education" className="text-gray-700 hover:text-gold-600 transition duration-300">Educación</Link>
          <Link href="/lifestyle" className="text-gray-700 hover:text-gold-600 transition duration-300">Lifestyle</Link>
          <Link href="/home-design" className="text-gray-700 hover:text-gold-600 transition duration-300">Hogar & Diseño</Link>
          <Link href="/contact" className="text-white bg-gold-600 hover:bg-gold-700 px-5 py-2 rounded-lg shadow-lg transition duration-300">Contacto</Link>
        </nav>
      </header>

      <section className="relative flex flex-col items-center justify-center text-center py-40 bg-cover bg-center text-white" style={{backgroundImage: "url('/luxury-hero.jpg')"}}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-xl">
          <h2 className="text-6xl font-extrabold">Servicios Exclusivos para Clientes de Alto Nivel</h2>
          <p className="text-2xl mt-6 max-w-3xl">
            Gestión premium en educación, lifestyle, hogar y asesoramiento patrimonial en España.
          </p>
          <Link href="/contact" className="mt-8 px-10 py-4 bg-gold-600 text-white font-bold rounded-full shadow-lg hover:bg-gold-700 transition duration-300">Contáctanos</Link>
        </div>
      </section>
    </div>
  );
}
