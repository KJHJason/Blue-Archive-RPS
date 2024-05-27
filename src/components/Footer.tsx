import GitHubIcon from "./GitHubIcon";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <div className="flex">
        <p className="ms-auto">
          Made by{" "}
          <a
            className="underline"
            href="https://github.com/KJHJason"
            target="_blank"
          >
            KJHJason
          </a>
        </p>
        <a
          href="https://github.com/KJHJason/Blue-Archive-RPS"
          target="_blank"
          className="ms-2 me-auto text-white underline"
        >
          <GitHubIcon />
        </a>
      </div>
      <p className="mt-2">Assets by © NEXON Games Co. Ltd & Yostar, Inc.</p>
    </footer>
  );
};

export default Footer;
