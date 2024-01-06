import { ReactNode } from "react";

interface ContentElementProps {
  children: ReactNode;
  img: string;
  altImg: string;
  className: string;
}

export const ContentElement: React.FC<ContentElementProps> = ({
  children,
  img,
  altImg,
  className,
}) => {
  return (
    <div className={className}>
      <div className="content-element-img-container">
        <img className="content-element-img" src={img} alt={altImg} />
      </div>
      {children}
    </div>
  );
};
