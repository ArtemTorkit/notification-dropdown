import type { Notification } from "../../types/notifications";

const NotificationCard = ({ notification }: { notification: Notification }) => {
  return (
    <div
      key={notification.id}
      className={`p-3 transition-colors flex items-start gap-3 hover:bg-gray-50/60 ${
        !notification.viewed ? "bg-blue-50/30" : ""
      }`}
    >
      {notification.sender.avatarUrl ? (
        <div className="w-8 h-8 shrink-0 overflow-hidden rounded-full">
          <img
            className="w-full h-full object-cover"
            alt="Avatar"
            src={notification.sender.avatarUrl}
          />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-xs text-gray-700 shrink-0">
          {notification.sender.name.charAt(0)}
        </div>
      )}

      <div className="flex-1 text-xs text-gray-600">
        <span className="font-semibold text-gray-900 block mb-0.5">
          {notification.sender.name}
        </span>
        {notification.message}
      </div>

      {!notification.viewed && (
        <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
      )}
    </div>
  );
};

export default NotificationCard;
