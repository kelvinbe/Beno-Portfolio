import Image from 'next/image';

const ImageComponent = ({image}) => {
  return <Image src={image} alt="Octocat" width={150} height={300} />;
};

export default ImageComponent;
