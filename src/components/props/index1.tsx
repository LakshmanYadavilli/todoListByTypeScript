import { ReactNode } from "react";

type propType = {
  details: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
const Test = ({ details, children }: propType) => {
  const { src, alt } = details;
  return (
    <>
      {children}
      <img src={src} alt={alt} />
    </>
  );
};

export default Test;
