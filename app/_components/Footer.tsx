import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <p>© Brham Dev Mahato {new Date().getFullYear()}</p>
      <div className="mt-2 flex justify-center">
        <SocialIcons />
      </div>
    </footer>
  );
}
