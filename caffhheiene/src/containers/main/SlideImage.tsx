interface SlideImageProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function SlideImage({ src, title, subtitle }: SlideImageProps) {
  return (
    <div className="relative">
      <img className="rounded-2xl w-[27rem] h-[27rem] object-cover" src={src} alt="slideImage" />
      {/*<h1>{title}</h1>*/}
      {/*<h2>{subtitle}</h2>*/}
    </div>
  );
}
