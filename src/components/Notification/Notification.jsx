import { NotificationStyled } from "./Notification.styled"

export const Notification =({message}) => {
    return (
        <NotificationStyled>{message}</NotificationStyled>
    )
}