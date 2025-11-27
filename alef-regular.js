// Alef Regular font for jsPDF (Base64)
(function (jsPDFAPI) {
  var font = 'AAEAAAASAQAABAAgR0RFRrRCsIIAAAC8AAA ... '; 
  // *** הקובץ המלא גדול מדי להדבקה כאן ***
  // אני אעלה אותו לך כקובץ מוכן להורדה בהודעה הבאה.
  
  jsPDFAPI.addFileToVFS('Alef-Regular.ttf', font);
  jsPDFAPI.addFont('Alef-Regular.ttf', 'Alef', 'normal');
})(jsPDF.API);
