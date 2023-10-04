interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="flex rounded-md bg-white_hover pb-0.5 pl-2 pr-2 pt-0.5 transition ease-in hover:bg-white_hover_weight">
      {tag}
    </div>
  );
}
