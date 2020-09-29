getRecipient = (message, position) => {
  let count = message.match(/@/g).length;
  if (position > count) {
    return "";
  } else {
    return message
      .split("@")
      [position].split(" ")[0]
      .replace(/[^\w\s]/g, "");
  }
};
