function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1,3), 16),
    g: parseInt(h.slice(3,5), 16),
    b: parseInt(h.slice(5,7), 16)
  };
}

hexStringToRGB("#FF9933")；  // {r:255, g:153, b:51}
