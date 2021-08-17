import chalk from "chalk"

const padLeadingZeros = (number : number, size : number) : string => {
  let result = number.toString();
  while (result.length < size) result = "0" + result;
  return result;
}

const getTime = () => {
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = padLeadingZeros(date.getMonth(), 2);
  const day = padLeadingZeros(date.getDate(), 2);
  const hour = padLeadingZeros(date.getHours(), 2);
  const minutes = padLeadingZeros(date.getMinutes(), 2);
  const seconds = padLeadingZeros(date.getSeconds(), 2);
  const millis = padLeadingZeros(date.getMilliseconds(), 3);

  return chalk.gray(`[${year}-${month}-${day} ${hour}:${minutes}:${seconds}-${millis}ms]`)
}

const methodLog = (method : "log" | "info" | "warn" | "error") : (info : { message : string, data ?: unknown }) => void => {
  return (info : { message : string, data ?: unknown }) => {
    const coloredLevel = {
      "log": chalk.white("LOG::"),
      "info": chalk.blue("INFO::"),
      "warn": chalk.yellow("WARN::"),
      "error": chalk.red("ERROR::"),
    }

    const timedMessage = `${getTime()} || ${coloredLevel[method]} ${info.message}`;

    if (info.data !== undefined) {
      console[method](timedMessage, "|| DATA::", info.data);
      return;
    }

    console[method](timedMessage);
  }
}

const log = methodLog("log");
const infoLog = methodLog("info");
const warnLog = methodLog("warn");
const errorLog = methodLog("error");

export default {
  log, infoLog, warnLog, errorLog
}
