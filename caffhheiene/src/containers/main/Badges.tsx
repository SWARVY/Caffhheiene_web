import { BADGES } from '@/constants/user';
import Badge from '@/containers/main/Badge';

export default function Badges() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {BADGES.map((data) => (
        <Badge svgImage={data.svg} name={data.name} color={data.color} />
      ))}
    </div>
  );
}
