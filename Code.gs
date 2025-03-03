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

function applyTemplate(templateContent) {
  try {
    const currentDoc = DocumentApp.getActiveDocument();
    const currentBody = currentDoc.getBody();
    currentBody.clear();

    const lines = templateContent.split('\n');

    lines.forEach(line => {
      if (line.startsWith('## ')) { // Heading 2
        const headingText = line.substring(3);
        currentBody.appendParagraph(headingText).setHeading(DocumentApp.ParagraphHeading.HEADING2);
      } else if (line === '---') { // Horizontal line
        currentBody.appendHorizontalRule();
      } else if(line.length > 0) {
        currentBody.appendParagraph(line);
      }
    });

    DocumentApp.getUi().alert("Template applied.");

  } catch (e) {
    Logger.log("Error in applyTemplate: " + e.toString());
    DocumentApp.getUi().alert('Error applying template: ' + e.toString());
  }
}

function templateSelected(templateName) {
  let templateContent;
  if (templateName === 'template:story') {
    templateContent = `## Chapter 1\n---\nSome story content\n## Chapter 2\n---\nMore story content`;
  } else if (templateName === 'template:ai') {
    templateContent = `## AI Section 1\n---\nAI Content\n## AI Section 2\n---\nMore AI Content`;
  }

  if (templateContent) {
    applyTemplate(templateContent);
  } else {
    DocumentApp.getUi().alert("Invalid template selected.");
  }
  google.script.host.close();
}
