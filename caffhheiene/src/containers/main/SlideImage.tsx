interface SlideImageProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function SlideImage({ src, title, subtitle }: SlideImageProps) {
  return (
    <div className="md:[25rem] relative h-[32rem] w-full">
      <img
        className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:brightness-75"
        src={src}
        alt="slideImage"
        loading="lazy"
      />
      <div className="absolute bottom-24 right-0 z-20 p-10 text-right text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 md:bottom-0">
        <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
        <h2 className="text-lg text-gray-200 md:text-xl">{subtitle}</h2>
      </div>
    </div>
  );
}
