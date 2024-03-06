import Image from 'next/image';

const ImageComponent = ({ image }) => {

  return (
    <div style={{ borderRadius: '50%', overflow: 'hidden', width: '150px', height: '150px' }}>
      <Image src={image} alt="Octocat" width={150} height={image === '/project.gif' ? 129 : 150} />
    </div>
  );
};

export default ImageComponent;
