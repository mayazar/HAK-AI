// Alef Bold font for jsPDF (Base64)
(function (jsPDFAPI) {
  var font = 'AAEAAAASAQAABAAgR0RFRrRCsIIAAAC8AAAB ... ';
  // *** כמו למעלה – אעלה בהודעה הבאה את הקובץ המלא ***
  
  jsPDFAPI.addFileToVFS('Alef-Bold.ttf', font);
  jsPDFAPI.addFont('Alef-Bold.ttf', 'Alef', 'bold');
})(window.jspdf && window.jspdf.jsPDF ? window.jspdf.jsPDF.API : (window.jsPDF ? window.jsPDF.API : null));
