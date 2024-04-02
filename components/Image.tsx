import Image from 'next/image';

interface ImageProps {
  className: string;
  imageStyles: string;
}

const ImageComp: React.FC<ImageProps> = ({
  className: styles,
  imageStyles,
}) => {
  return (
    <div className={styles}>
      <Image
        src="/artWorkshopTestPic.jpg"
        fill
        alt="ImagePlaceholder"
        className={imageStyles}
      />
    </div>
  );
};

export default ImageComp;
