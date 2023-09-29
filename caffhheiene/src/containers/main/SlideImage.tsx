interface SlideImageProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function SlideImage({ src, title, subtitle }: SlideImageProps) {
  return (
    <div className="relative w-full md:[25rem] h-[32rem]">
      <img
        className="w-full h-full transition ease-in-out duration-300 object-fill group-hover:brightness-75"
        src={src}
        alt="slideImage"
        loading="lazy"
      />
      <div className="absolute transition ease-in-out duration-300 opacity-0 group-hover:opacity-100 z-20 bottom-24 md:bottom-0 right-0 text-white text-right p-10">
        <h1 className="text-2xl md:text-4xl">{title}</h1>
        <h2 className="text-xl md:text-xl">{subtitle}</h2>
      </div>
    </div>
  );
}
