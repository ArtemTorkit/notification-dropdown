export interface Notification {
    id: string
    message: string
    viewed: boolean
    sender: {
        name: string
        avatarUrl?: string
    }
}