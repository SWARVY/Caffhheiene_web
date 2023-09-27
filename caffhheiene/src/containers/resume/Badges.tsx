import { SNS_BADGES, TECH_BADGES } from '@/constants/user';
import Badge from '@/containers/resume/Badge';

interface BadgesProps {
  type: 'TECH' | 'SNS';
}

export default function Badges({ type }: BadgesProps) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {type === 'TECH' ? (
        <>
          {TECH_BADGES.map((data, idx) => (
            <Badge key={idx} svgImage={data.svg} name={data.name} color={data.color} />
          ))}
        </>
      ) : (
        <>
          {SNS_BADGES.map((data, idx) => (
            <Badge key={idx} svgImage={data.svg} name={data.name} color={data.color} />
          ))}
        </>
      )}
    </div>
  );
}
