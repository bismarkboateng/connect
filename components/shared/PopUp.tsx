import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


type PopUpProps = {
  title: string,
  message: string,
  className: string,
}
export function PopUp({ title, message, className }: PopUpProps) {
  return (
    <Alert className={className}>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}
