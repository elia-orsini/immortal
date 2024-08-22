const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-6 sm:gap-y-6 justify-between mx-2 sm:mx-10 mb-10 text-xs">
      <div className="flex flex-col gap-y-1 sm:gap-y-1">
        <p>
          immortal mags aims to be the largest online repository of
          independent magazines.
        </p>

        <p>
          send us an{" "}
          <a
            className="underline cursor-cell"
            target="_blank"
            href="mailto:elia.orsini@hotmail.com"
          >
            email
          </a>{" "}
        </p>
      </div>

      <div className="flex flex-col gap-y-1 sm:gap-y-1">
        <p>immortal mags © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
