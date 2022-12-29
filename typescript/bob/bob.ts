export function hey(message: string): string {
  const trimmed: string = message.trim();
  const isSilence: boolean = trimmed === '';
  const isQuestion: boolean = trimmed.endsWith('?');
  const isYelling: boolean = !(/[a-z]/.test(trimmed)) && /[A-Z]/.test(trimmed);

  if (isSilence) {
    return 'Fine. Be that way!';
  }

  if (isYelling && isQuestion) {
    return 'Calm down, I know what I\'m doing!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  if (isYelling) {
    return 'Whoa, chill out!';
  }

  return 'Whatever.';
}
