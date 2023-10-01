interface SlideImageProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function SlideImage({ src, title, subtitle }: SlideImageProps) {
  return (
    <div className="relative w-full md:[25rem] h-[32rem]">
      <img
        className="w-full h-full transition ease-in-out duration-300 object-cover group-hover:brightness-75"
        src={src}
        alt="slideImage"
        loading="lazy"
      />
      <div className="absolute transition ease-in-out duration-300 opacity-0 group-hover:opacity-100 z-20 bottom-24 md:bottom-0 right-0 text-white text-right p-10">
        <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
        <h2 className="text-lg md:text-xl text-gray-200">{subtitle}</h2>
      </div>
    </div>
  );
}
