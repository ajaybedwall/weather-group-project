export default function Footer() {
  return (
    <footer className="w-full p-6 flex flex-col md:flex-row justify-between items-center border-t border-white border-opacity-25 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md backdrop-blur">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <span className="text-lg font-semibold">Weather App</span>
        <span className="text-sm">Providing accurate weather updates</span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <span className="text-lg font-semibold">Team</span>
        <span className="text-sm">Mahi Manoj, Ajay Meena, Waseem Raja</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-semibold">Contact Us</span>
        <span className="text-sm">waseem@navgurukul.org</span>
        <span className="text-sm">+917354023955</span>
      </div>
    </footer>
  );
}
