import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center dark:text-white">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold gradient-text drop-shadow-lg">GPC Algorithms</h1>
        <p className="text-gray-500 dark:text-white text-lg font-medium mt-12">Aprende y conoce más sobre técnicas, algoritmos y estructuras de datos para que puedas mejorar tus resultados en contests de programación competitiva.</p>
      </div>
      <p className="absolute text-center text-gray-500 dark:text-white text-sm bottom-12">
        ¿Quieres redactar contenido para GPC Algorithms? <Link href="/editor" className="hover:underline hover:font-medium underline-offset-4">Accede al editor</Link>
      </p>
    </main>
  )
}

export default HomePage;