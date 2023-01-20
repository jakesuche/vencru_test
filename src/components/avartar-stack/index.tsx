import React from "react";
import { AvartaPlus, Avartar, Avartars } from "./stack-avartar";

type Iprops = {
  images: string[];
};
const AvatarStack: React.FC<Iprops> = ({ images }) => {
  return (
    <Avartars>
      {!!images.slice(5).length && (
        <AvartaPlus>
          <span>+{images.slice(5).length}</span>
        </AvartaPlus>
      )}
      {images
        .slice(0, 5)
        .reverse()
        .map((image, i) => (
          <Avartar key={i}>
            <img src={image} alt="reseller" />
          </Avartar>
        ))}
    </Avartars>
  );
};

export default AvatarStack;
