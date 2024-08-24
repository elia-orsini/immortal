const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-6 justify-between mx-2 sm:mx-10 mb-10 text-xs">
      <div className="flex flex-col gap-y-6">
        <p>
          say hi or submit a mag, send us an{" "}
          <a
            className="underline"
            target="_blank"
            href="mailto:elia.orsini@hotmail.com"
          >
            email
          </a>{" "}
          !
        </p>
      </div>

      <div className="flex flex-col">
        <p>
          immortal mags aims to be the largest online repository of independent
          magazines.
        </p>

        <p>© 2024</p>
      </div>
    </div>
  );
};

export default Footer;
