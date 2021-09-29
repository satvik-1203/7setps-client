export default interface IInput {
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  stateName?: string;
  value?: string;
}
