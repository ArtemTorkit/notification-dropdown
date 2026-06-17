import { Card } from "../Card";
import type { Notification } from "../../types/notifications";
import NotificationCard from "./NotificationCard";
import NotificationFilters from "./NotificationFilters";

interface NotificationDropdownProps {
  unreadCount: number;
  notifications: Notification[];
  loading: boolean;
  error: string | null;
  onToggleFilter: () => void;
  onReadNotifications: () => void;
}

const NotificationDropdown = ({
  unreadCount,
  loading,
  error,
  notifications,
  onToggleFilter,
  onReadNotifications,
}: NotificationDropdownProps) => {
  return (
    <div className="fixed sm:absolute top-[64px] sm:top-full left-4 sm:left-auto right-4 sm:right-0 mt-2 w-auto sm:w-80 z-50">
      <Card>
        <Card.Header>
          <Card.Title>Notifications</Card.Title>
          {unreadCount > 0 && (
            <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
              {unreadCount} New
            </span>
          )}
        </Card.Header>

        <Card.Body>
          <NotificationFilters onToggleFilter={onToggleFilter} />

          <div className="max-h-64 overflow-y-auto divide-y divide-gray-50 p-0">
            {loading && (
              <div className="p-4 text-center text-gray-400 text-sm">
                Loading updates...
              </div>
            )}

            {error && (
              <div className="p-4 text-center text-red-500 text-sm">
                {error}
              </div>
            )}

            {!loading && !error && notifications.length === 0 && (
              <div className="p-4 text-center text-gray-400 text-sm">
                All caught up!
              </div>
            )}

            {!loading &&
              !error &&
              notifications.map((n) => (
                <NotificationCard key={n.id} notification={n} />
              ))}
          </div>
        </Card.Body>

        <Card.Footer>
          <button
            className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors py-0.5 cursor-pointer"
            onClick={onReadNotifications}
          >
            Mark all as read
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NotificationDropdown;
