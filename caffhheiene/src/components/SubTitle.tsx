interface SubTitleProps {
  subTitle: string;
}

export default function SubTitle({ subTitle }: SubTitleProps) {
  return (
    <h1 className="text-4xl font-bold italic drop-shadow-md hover:underline hover:underline-offset-1">
      {subTitle}
    </h1>
  );
}
