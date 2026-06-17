import { BellIcon } from '@heroicons/react/24/outline'

interface NotificationBellProps {
  count: number;
  onClick?: () => void;
}

const NotificationBell = ({ count, onClick = () => {} }: NotificationBellProps) => {

  return (
    <button 
      onClick={onClick}
      className="relative inline-block p-1 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
      aria-label={`Notifications, ${count} unread`}
    >
        <BellIcon className="w-6 h-6" />
        {count > 0 && (
          <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white transform translate-x-1/2 -translate-y-1/2">
            {count > 99 ? '99+' : count}
          </span>
        )}
    </button>
  )
}

export default NotificationBell