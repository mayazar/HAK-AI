// Alef Bold font for jsPDF (Base64)

  // *** כאן שימי את המחרוזת הארוכה של Alef Bold ***
  var AlefBold = 'AAEAAAASAQAABAAgR0RFRtqTyEIAAA...הפונט_שלך...';

  jsPDFAPI.addFileToVFS('Alef-Bold.ttf', font);
  jsPDFAPI.addFont('Alef-Bold.ttf', 'Alef', 'bold');

})(typeof window !== "undefined" ? window : this);
