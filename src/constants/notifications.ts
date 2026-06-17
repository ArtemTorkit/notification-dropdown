import type { Notification } from '../types/notifications'

export const MOCKED_NOTIFICATIONS: Notification[] = [
  {
    id: "f3b9a7b2-1092-4c2d-9471-707b1a2cf310",
    message: "sent you a connection request.",
    viewed: false,
    sender: {
      name: "Sarah Jenkins",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "8c12df47-bc83-4a1e-8495-3df912a76c8c",
    message: "mentioned you in a comment on Project Alpha.",
    viewed: true,
    sender: {
      name: "Alex Rivera",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "1a8d0f11-7389-49bb-b1d8-f86a241bde82",
    message: "System: Automated backup finished without errors.",
    viewed: false,
    sender: {
      name: "System Core"
    }
  }
];