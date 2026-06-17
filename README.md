# Notifications Dropdown

A production-ready React notifications dropdown component featuring filtering, read/unread state management, and a polished UI built with TypeScript, React, and Tailwind CSS.

## 🎯 Overview

This project implements a working notification system with the following core features:

- **Open/Close Toggle** - Click the bell icon to open/close the dropdown
- **Unread Filtering** - Switch between "All Notifications" and "Unread" tabs
- **Mark as Read** - Bulk action to mark all notifications as read at once
- **State Management** - Derived unread count that never drifts out of sync with actual data
- **Responsive Design** - Works across different screen sizes
- **Accessibility** - Proper ARIA labels and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── App.tsx                          # Root component
├── main.tsx                         # Entry point
├── index.css                        # Global styles
├── components/
│   ├── Header.tsx                   # Header with notification bell
│   ├── Card.tsx                     # Reusable card component (compound pattern)
│   └── notifications/
│       ├── NotificationDropdownContainer.tsx  # Smart container (state logic)
│       ├── NotificationPresenter.tsx          # Presentational wrapper
│       ├── NotificationDropdown.tsx           # Dropdown UI
│       ├── NotificationBell.tsx               # Bell icon with badge
│       ├── NotificationCard.tsx               # Individual notification item
│       └── NotificationFilters.tsx            # All/Unread tab filter
├── hooks/
│   └── useToggle.ts                 # Custom toggle hook
├── types/
│   └── notifications.ts             # TypeScript interfaces
└── constants/
    └── notifications.ts             # Mock notification data
```

## 🏗️ Architecture & State Management

### Container/Presenter Pattern

The component follows a proven separation of concerns:

- **NotificationDropdownContainer** - Handles all state logic and data management
  - Manages notification list state
  - Handles loading and error states
  - Calculates derived values (unread count, filtered notifications)
  - Owns all event handlers

- **NotificationPresenter** - Manages UI interaction state only (open/close)

- **NotificationDropdown** - Pure presentational component

This separation makes the logic testable and reusable, while keeping UI components simple.

### State Design

```tsx
// Source of truth
const [notifications, setNotifications] = useState<Notification[]>([]);

// Derived values (never out of sync)
const unreadCount = notifications.filter((n) => !n.viewed).length;
const filteredNotifications = useMemo(() => {
  return showUnreadOnly
    ? notifications.filter((n) => !n.viewed)
    : notifications;
}, [notifications, showUnreadOnly]);
```

**Key principle**: Unread count is derived from the actual notification data, not stored separately. This prevents synchronization bugs where the badge shows the wrong number.

### Performance Optimizations

- `useMemo` - Filtered notifications only recalculate when dependencies change
- `useCallback` - Event handlers maintain referential equality
- `as const` - Hook return type assertion prevents unnecessary type widening

## 🎨 Component Breakdown

### NotificationDropdownContainer

- Fetches/manages notifications (simulates API call with 1s delay)
- Manages filter state
- Provides handlers for bulk actions

### NotificationPresenter

- Manages dropdown open/close state
- Orchestrates Container and Dropdown components

### NotificationDropdown

- Renders the dropdown UI
- Displays loading, error, and empty states
- Shows filter tabs and notification list

### NotificationFilters

- Animated tab switcher with smooth transitions
- Guards against redundant state updates

### NotificationBell

- Icon button with animated badge
- Shows unread count (capped at "99+")
- Accessible with proper ARIA labels

### Card (Compound Component)

- Reusable card layout with header, body, and footer
- Uses the compound component pattern for flexibility
- Composable structure: `<Card><Card.Header>...</Card.Header></Card>`

## 🔧 Key Technologies

| Tool             | Purpose                        |
| ---------------- | ------------------------------ |
| **React 19**     | UI framework                   |
| **TypeScript**   | Type safety                    |
| **Vite**         | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling          |
| **Heroicons**    | Beautiful icon library         |
| **ESLint**       | Code quality                   |

## 📊 Data Flow

```
User clicks bell
    ↓
NotificationPresenter toggles isOpen state
    ↓
NotificationDropdown renders/unmounts
    ↓
User clicks "Unread" tab
    ↓
NotificationFilters calls onToggleFilter
    ↓
NotificationDropdownContainer updates showUnreadOnly
    ↓
Filtered notifications memoized and re-rendered
    ↓
Bell badge updates with new unread count
```

## 🎯 Feature Highlights

### ✅ Implemented

- Open/close dropdown with bell icon
- Filter notifications (All vs. Unread)
- Mark all as read
- Unread count badge with "99+" cap
- Loading state with simulated 1s delay
- Error handling
- Empty state ("All caught up!")
- Smooth animated filter tabs
- Hover effects and transitions
- Accessibility features (ARIA labels)

## 💡 Design Decisions

### Why Container/Presenter Pattern?

Separates business logic from UI, making components reusable and testable. The Container can be swapped out with a Redux-connected version or Context provider if needed.

### Why Derive Unread Count?

Storing it separately creates a source-of-truth problem. By calculating it from the notifications array, we guarantee consistency.

### Why useToggle Hook?

Abstracts the common boolean state pattern, reducing boilerplate and improving code clarity.

### Why Compound Card Component?

Provides flexibility while maintaining consistent styling. Consumers can compose it without worrying about internal structure.

### Why useMemo for Filtered Notifications?

Prevents recalculating the filtered list on every render, which matters as the notification list grows.

