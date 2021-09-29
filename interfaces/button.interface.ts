export default interface IButton {
  name: string;
  type: "button" | "submit" | "reset";
  className?: string;
}
