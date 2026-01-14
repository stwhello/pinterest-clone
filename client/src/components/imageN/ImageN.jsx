import { Image } from "@imagekit/react";

const ImageN = ({ path, alt, className, w, h }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      src={path}
      transformation={[{ width: w, height: h }]}
      alt={alt}
      loading='lazy'
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default ImageN;
