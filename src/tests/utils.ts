export const rgbToHex = (rgb: String): String => {
  const numbers = rgb.split("(")[1].split(")")[0];

  return (
    "#" +
    numbers
      .split(",")
      .map(function (x) {
        x = parseInt(x).toString(16).toUpperCase();
        return x.length == 1 ? "0" + x : x;
      })
      .join("")
  );
};
