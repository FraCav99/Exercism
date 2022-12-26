export function decodedValue(colors: string[]): number {
  const COLOR_MAP: any = {
    'black': '0',
    'brown': '1',
    'red': '2',
    'orange': '3',
    'yellow': '4',
    'green': '5',
    'blue': '6',
    'violet': '7',
    'grey': '8',
    'white': '9'
  };

  const [firstColor, secondColor] = colors;
  return +`${COLOR_MAP[firstColor]}${COLOR_MAP[secondColor]}`;
}
