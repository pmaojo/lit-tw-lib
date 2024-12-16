import { ITheme } from "./ITheme";

export interface IComponent {
    disabled?: boolean;
    className?: string;
    theme?: ITheme;
  }