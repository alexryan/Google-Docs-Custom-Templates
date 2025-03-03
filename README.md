# Google-Docs-Custom-Templates

This Google Apps Script project enables regular Google Docs users to select from a menu of custom templates, bypassing the limitations of Google Docs' built-in template system.

## How to Use

### 1. Fill Your Google Doc with a Template

1.  Open a new or existing Google Doc.
2.  You will see a new "Template" menu in the menu bar.
3.  Click on the "Template" menu and select "Select Template".
4.  A dialog box will appear with a list of available templates.
5.  Click on the template you want to apply.
6.  The content of the selected template will be inserted into your Google Doc.
7.  An alert box will also display the selected template name.

### 2. Add New Templates to the Templates Menu

1.  Open the Google Apps Script editor associated with your Google Doc (Tools > Script editor).
2.  Locate the `showTemplateDialog()` function in the `Code.gs` file.
3.  Within the `showTemplateDialog()` function, you'll find the `templateChoices` object.
4.  Add a new key-value pair to the `templateChoices` object, where:
    * The **key** is a unique identifier for your template (e.g., `'template:my-new-template'`).
    * The **value** is the display name of the template as you want it to appear in the menu (e.g., `'My New Template'`).
5.  In the `TemplateDialog.html` file, add a new button with an `onclick` event that calls the `selectTemplate()` function, passing in the key you created in the `templateChoices` object.
6.  Save both files.
7.  Reload your Google Doc.
8.  The new template will now appear in the "Template" menu.

**Example:**

In `Code.gs`:

```javascript
function showTemplateDialog() {
  const templateChoices = {
    'template:story': 'Story Template',
    'template:ai': 'AI Template',
    'template:my-new-template': 'My New Template' // Add this line
  };
  // ... rest of the function ...
}
```

In Template.html:
```html
<button onclick="selectTemplate('template:my-new-template')">My New Template</button>
```

### 3. Install the Google Apps Script and Make it Available in All Google Docs

1.  **Open a Google Doc:** Open any Google Doc.
2.  **Open the Script Editor:** Go to "Tools" > "Script editor".
3.  **Copy and Paste the Code:** Copy the contents of `Code.gs` and `TemplateDialog.html` from this repository and paste them into the respective files in your script editor.
4.  **Save the Script:** Save the script.
5.  **Authorize the Script:** Reload the Google Doc. You will be prompted to authorize the script. Grant the necessary permissions.
6.  **Use in Any Google Doc:** The "Template" menu will now be available in all your Google Docs.

**Note:** This script uses `HtmlService` to create the template selection dialog, providing a more reliable and customizable user interface than the basic `Ui` service.
