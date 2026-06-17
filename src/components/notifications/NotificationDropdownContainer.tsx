import { useCallback, useEffect, useMemo, useState } from "react"
import { MOCKED_NOTIFICATIONS } from "../../constants/notifications"
import NotificationPresenter from "./NotificationPresenter"
import type { Notification } from "../../types/notifications"
import { useToggle } from "../../hooks/useToggle"

const NotificationDropdownContainer = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  const [showUnreadOnly, toggleShowUnreadOnly] = useToggle(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (!MOCKED_NOTIFICATIONS) {
          throw new Error("Failed to fetch notifications data.")
        }

        setNotifications(MOCKED_NOTIFICATIONS)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unexpected error occurred.")
        }
      } finally {
        setLoading(false)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleMarkAllAsRead = useCallback(() => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        viewed: true,
      })),
    )
  }, []);

  const filteredNotifications = useMemo(() => {
    // If the filter is off, return all notifications immediately
    if (!showUnreadOnly) return notifications;

    // Otherwise, return only items where viewed is false
    return notifications.filter((notification) => !notification.viewed);
  }, [notifications, showUnreadOnly]);

  const unreadCount = notifications.filter(
    (notification) => !notification.viewed,
  ).length;

  return (
    <NotificationPresenter
      notifications={filteredNotifications}
      loading={loading}
      error={error}
      unreadCount={unreadCount}
      onToggleFilter={toggleShowUnreadOnly}
      onReadNotifications={handleMarkAllAsRead}
    />
  );
}

export default NotificationDropdownContainer