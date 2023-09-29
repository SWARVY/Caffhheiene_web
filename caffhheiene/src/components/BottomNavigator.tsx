import { BOTTOM_NAVBAR } from '@/constants/navbar';

export default function BottomNavigator() {
  return (
    <div className="p-20 text-center">
      <h1>{BOTTOM_NAVBAR.copyright}</h1>
    </div>
  );
}
