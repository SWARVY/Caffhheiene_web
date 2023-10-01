interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="flex transition ease-in bg-white_hover hover:bg-white_hover_weight pt-0.5 pb-0.5 pl-2 pr-2 rounded-md">
      {tag}
    </div>
  );
}
