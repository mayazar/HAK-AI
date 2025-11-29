// Alef Bold font for jsPDF (Base64)
(function (root) {

  var jsPDFAPI =
    root && root.jspdf && root.jspdf.jsPDF
      ? root.jspdf.jsPDF.API
      : (root && root.jsPDF ? root.jsPDF.API : null);

  if (!jsPDFAPI) {
    console.error("jsPDF not loaded – Alef Bold font not registered");
    return;
  }

  // *** כאן שימי את המחרוזת הארוכה של Alef Bold ***
  var font = 'AAEAAAASAQAABAAgR0RFRtqTyEIAAA...הפונט_שלך...';

  jsPDFAPI.addFileToVFS('Alef-Bold.ttf', font);
  jsPDFAPI.addFont('Alef-Bold.ttf', 'Alef', 'bold');

})(typeof window !== "undefined" ? window : this);
