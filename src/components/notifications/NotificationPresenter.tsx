import { useRef } from "react";
import type { Notification } from "../../types/notifications";
import NotificationBell from "./NotificationBell";
import { useToggle } from "../../hooks/useToggle";
import { useClickOutside } from "../../hooks/useClickOutside";
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

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    if (isOpen) {
      toggle();
    }
  });

  return (
    <div ref={containerRef} className="relative inline-block">
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
