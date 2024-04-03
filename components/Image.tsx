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
        src="/Placeholder_view_vector.svg.png"
        fill
        alt="ImagePlaceholder"
        className={imageStyles}
      />
    </div>
  );
};

export default ImageComp;
