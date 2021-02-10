export const rand = () => {
    var result = "";
    var randChar =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < 20; i++) {
      result += randChar[Math.floor(Math.random() * randChar.length)];
    }
    return result;
  };