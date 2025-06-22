/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Esto le dice a Tailwind que busque clases en todos tus archivos de React.
  ],
  theme: {
    extend: {
      // Aquí puedes añadir tus colores si quieres darles nombres personalizados
      // para no tener que escribir los códigos hexadecimales todo el tiempo.
      // Ejemplo:
      // colors: {
      //   'primary-green': '#00B8A9',
      //   'primary-red': '#F94144',
      // }
    },
  },
  plugins: [],
}
