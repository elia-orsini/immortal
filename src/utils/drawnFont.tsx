import localFont from "next/font/local";

const drawn = localFont({
  src: [
    {
      path: "../../public/fonts/Drawn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default drawn.className;
