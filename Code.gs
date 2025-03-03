/** @OnlyCurrentDoc */

function onOpen() {
  DocumentApp.getUi()
    .createMenu('Template')
    .addItem('Select Template', 'showTemplateDialog')
    .addToUi();
}

function showTemplateDialog() {
  const html = HtmlService.createHtmlOutputFromFile('TemplateDialog')
    .setWidth(300)
    .setHeight(150);
  DocumentApp.getUi().showModalDialog(html, 'Select a Template');
}

function templateSelected(templateName) {
  Logger.log("Selected template: " + templateName);
  DocumentApp.getUi().alert("Selected template: " + templateName);
}