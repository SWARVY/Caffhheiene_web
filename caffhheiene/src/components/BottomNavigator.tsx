import { BOTTOM_NAVBAR } from '@/constants/navbar';

export default function BottomNavigator() {
  return (
    <div className="pt-20 pb-20 md:pr-20 md:pl-20 text-center">
      <h1>{BOTTOM_NAVBAR.copyright}</h1>
    </div>
  );
}
