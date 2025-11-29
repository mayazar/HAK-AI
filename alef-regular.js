// Alef Regular font for jsPDF (Base64)
(function (root) {

  // מוצאים את API של jsPDF בצורה בטוחה
  var jsPDFAPI =
    root && root.jspdf && root.jspdf.jsPDF
      ? root.jspdf.jsPDF.API
      : (root && root.jsPDF ? root.jsPDF.API : null);

  if (!jsPDFAPI) {
    console.error("jsPDF not loaded – Alef Regular font not registered");
    return;
  }

  // *** כאן שימי את המחרוזת הארוכה של הפונט ***
  var font = 'AAEAAAASAQAABAAgR0RFRrRCsIIAAAC8AAA...הפונט_שלך...';

  jsPDFAPI.addFileToVFS('Alef-Regular.ttf', font);
  jsPDFAPI.addFont('Alef-Regular.ttf', 'Alef', 'normal');

})(typeof window !== "undefined" ? window : this);
