import type { Notification } from "../../types/notifications";
import NotificationBell from "./NotificationBell";
import { useToggle } from "../../hooks/useToggle";
import NotificationDropdown from "./NotificationDropdown";

interface NotificationPresenterProps {
  notifications: Notification[];
  loading: boolean;
  error: string | null;
  unreadCount: number;
  onToggleFilter: () => void;
  onReadNotifications: () => void;
}

const NotificationPresenter = ({
  notifications,
  loading,
  error,
  unreadCount,
  onToggleFilter,
  onReadNotifications,
}: NotificationPresenterProps) => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="">
      <NotificationBell count={unreadCount} onClick={toggle} />

      {isOpen && (
        <NotificationDropdown
          unreadCount={unreadCount}
          notifications={notifications}
          loading={loading}
          error={error}
          onToggleFilter={onToggleFilter}
          onReadNotifications={onReadNotifications}
        />
      )}
    </div>
  );
};

export default NotificationPresenter;
