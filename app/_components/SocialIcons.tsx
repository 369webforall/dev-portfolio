/* --- SocialIcons (app/components/SocialIcons.tsx) --- */
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} />
      </a>
    </div>
  );
}
