import { BLACK, DANGER, DARK, LIGHT, LIGHTGREEN, MEDIUM, PRIMARY, SECONDARY, SUCCESS, TERTIARY, WARNING, WHITE } from '../constants/constant';

export type ColorType =
  typeof PRIMARY | typeof SECONDARY | typeof TERTIARY | typeof SUCCESS | typeof WARNING | typeof DANGER | typeof DARK | typeof MEDIUM | typeof LIGHT | typeof WHITE  | typeof BLACK | typeof LIGHTGREEN;
