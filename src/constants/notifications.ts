import type { Notification } from "../../types/notifications";

export const MOCKED_NOTIFICATIONS: Notification[] = [
  {
    id: "f3b9a7b2-1092-4c2d-9471-707b1a2cf310",
    message: "sent you a connection request.",
    viewed: false,
    createdAt: "2m ago",
    sender: {
      name: "Sarah Jenkins",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    },
  },
  {
    id: "8c12df47-bc83-4a1e-8495-3df912a76c8c",
    message:
      "mentioned you in a comment on Project Alpha: 'Let's review the new Tailwind layouts before we ship.'",
    viewed: false,
    createdAt: "15m ago",
    sender: {
      name: "Alex Rivera",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    },
  },
  {
    id: "1a8d0f11-7389-49bb-b1d8-f86a241bde82",
    message: "Automated database backup finished successfully without errors.",
    viewed: true,
    createdAt: "1h ago",
    sender: {
      name: "System Core",
      // No avatarUrl to test fallback placeholder rendering
    },
  },
  {
    id: "d4e2a3b1-5501-4f11-9a29-c7cdf1a2939e",
    message: "invited you to join the 'Frontend Avengers' workspace.",
    viewed: false,
    createdAt: "3h ago",
    sender: {
      name: "Emma Watson",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
    },
  },
  {
    id: "b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
    message:
      "requested changes on your pull request: 'Fix linter issues on save configuration'.",
    viewed: true,
    createdAt: "Yesterday",
    sender: {
      name: "Marcus Vance",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    },
  },
  {
    id: "bc83df47-bc83-4a1e-8495-3df912a76c8c",
    message:
      "liked your recent article 'Mastering Compound Components in React'.",
    viewed: true,
    createdAt: "2 days ago",
    sender: {
      name: "Elena Rostova",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    },
  },
  {
    id: "e5473a21-4401-4f11-9a29-b6bdf81a293b",
    message:
      "Security alert: Critical CPU usage threshold exceeded over 92% for the past 15 minutes.",
    viewed: true,
    createdAt: "1 week ago",
    sender: {
      name: "AWS Watchdog",
    },
  },
];
