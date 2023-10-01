interface FilterProps {
  name: string;
  amount?: number;
}

export default function Filter({ name, amount }: FilterProps) {
  return (
    <div className="flex transition ease-in rounded-lg bg-white_hover hover:bg-white_hover_weight shadow-md pr-3 pl-3 pt-1 pb-1">
      <h3 className="mr-1">{name}</h3>
      <p className="text-xs">{amount}</p>
    </div>
  );
}
