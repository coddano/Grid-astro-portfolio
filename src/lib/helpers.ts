export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInGMT(): Date {
  return new Date();
}

export function formatTimeForGMT(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "GMT",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " GMT";

  return formattedTime;
}
