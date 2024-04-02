import Image from 'next/image';

interface ImageProps {
  className: string
}

const ImageComp: React.FC<ImageProps> = ({ className: styles }) => {
  return (
    <div className={styles}>
      <Image src="/imagePlaceholder.png" fill alt="ImagePlaceholder" />
    </div>
  );
};

export default ImageComp;
