import { useEffect, useState } from "react"
import { MOCKED_NOTIFICATIONS } from "../../constants/notifications"
import NotificationPresenter from "./NotificationPresenter"
import type { Notification } from "../../types/notifications"

const NotificationDropdownContainer = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

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

  return (
    <NotificationPresenter 
      notifications={notifications}
      loading={loading}
      error={error}
    />
  )
}

export default NotificationDropdownContainer