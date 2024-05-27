import { FaLinkedin, FaLink, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10 items-center px-4 py-10">
        <aside className="">
          <p>Copyright © 2024 - All right reserved by RecipeRealm.</p>
        </aside>
        <nav className="flex justify-center items-center gap-5">
          <a href="https://asrafulmasum.netlify.app" target="_blank">
            <FaLink className="text-2xl text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/hossain-mohammad-asraful-islam-masum-4b5847200" target="_blank">
            <FaLinkedin className="text-2xl text-primary" />
          </a>
          <a href="https://www.facebook.com/asrafulislam.masum.3" target="_blank">
            <FaFacebook className="text-2xl text-primary" />
          </a>
          <a href="https://github.com/AsrafulMasum" target="_blank">
            <FaGithub className="text-2xl text-primary" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
