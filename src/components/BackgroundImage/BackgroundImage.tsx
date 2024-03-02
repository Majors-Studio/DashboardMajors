import Image from "next/image";
import React from "react";

const BackgroundImage: React.FC = () => {
  const suffix: "" | "@2x" | "@3x" = "";
  const relativePath = "/background/image" + suffix + ".png";

  return (
      <Image
        src={relativePath}
          alt="background"
      layout="fill"
      className="object-cover absolute z-[-1]
      filter blur-[5px] brightness-50


      
      
      "
      />
  );
};

export default BackgroundImage;
