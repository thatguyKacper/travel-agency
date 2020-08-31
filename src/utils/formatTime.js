const stringTime = arg => {
  const stringNumber = String(arg).padStart(2, '0');
  return stringNumber;
};

export const formatTime = time => {
  if (time != undefined && typeof (time) == 'number' && time >= 0) {

    return (stringTime(Math.floor(time / 3600)) + ':' +
      stringTime(Math.floor((time / 60) % 60)) + ':' +
      stringTime(Math.floor(time % 60)));
  } else {
    return null;
  }
};
