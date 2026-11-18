// Attendance bridge: lets the desktop app read and write this spreadsheet.
// Paste into Extensions > Apps Script inside the sheet, then Deploy > New deployment > Web app.
const SHEET_NAME = 'Sheet1';

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const sh = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
  const last = sh.getLastRow();
  const values = last > 1 ? sh.getRange(2, 1, last - 1, 6).getValues() : [];
  return out_({ values: values.map(function (r) {
    return [String(r[0]), String(r[1]), String(r[2]), String(r[3]), String(r[4]), r[5]];
  }) });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const data = JSON.parse(e.postData.contents);
    const row = data.values && data.values[0];
    if (!row || row.length !== 6) return out_({ ok: false, error: 'bad row' });
    const sh = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    const n = sh.getLastRow() + 1;
    sh.getRange(n, 1, 1, 5).setNumberFormat('@');
    sh.getRange(n, 1, 1, 6).setValues([[String(row[0]), String(row[1]), String(row[2]), String(row[3]), String(row[4]), Number(row[5])]]);
    return out_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
