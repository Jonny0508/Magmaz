import Image, { StaticImageData } from 'next/image';
import styles from './Article1.module.css';

interface Article1Props {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}

export const Article1: React.FC<Article1Props> = ({ imageSrc, title, text }) => {
  return (
    <div className={styles.article}>
      <Image src={imageSrc} alt={title} width={600} height={400} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};