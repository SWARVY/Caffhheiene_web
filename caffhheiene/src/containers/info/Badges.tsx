import { SNS_BADGES, TECH_BADGES } from '@/constants/badge';
import Badge from '@/components/Badge';

interface BadgesProps {
  type: 'TECH' | 'SNS';
}

export default function Badges({ type }: BadgesProps) {
  return (
    <div className="grid grid-cols-3 gap-1.5 p-2">
      {type === 'TECH' ? (
        <>
          {TECH_BADGES.map((data, idx) => (
            <Badge
              key={idx}
              svgImage={data.svg}
              name={data.name}
              color={data.color}
            />
          ))}
        </>
      ) : (
        <>
          {SNS_BADGES.map((data, idx) => (
            <a key={idx} href={data.link} target="_blank" rel="noreferrer">
              <Badge svgImage={data.svg} name={data.name} color={data.color} />
            </a>
          ))}
        </>
      )}
    </div>
  );
}
