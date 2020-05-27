'use strict'

import { saveAs } from 'file-saver'
const contentType = 'application/vnd.ms-excel;charset=utf-8'
const htmlTemplate = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
  <head>
    <!--[if gte mso 9]>
    <xml>
      <x:ExcelWorkbook>
        <x:ExcelWorksheets>
          <x:ExcelWorksheet>
            <x:Name>{worksheet}</x:Name>
            <x:WorksheetOptions>
              <x:DisplayGridlines/>
            </x:WorksheetOptions>
          </x:ExcelWorksheet>
        </x:ExcelWorksheets>
      </x:ExcelWorkbook>
    </xml>
    <![endif]-->
    <meta http-equiv="content-type" content="text/plain; charset=UTF-8"/>
  </head>
  <body>
    <div>{html}</div>
  </body>
</html>`

export function exportExcelById(elementId, fileName = 'download.xls', sheetName = 'Worksheet') {
  const el = document.getElementById(elementId)
  if (!el) throw new Error(`not find element.`)
  const contents = htmlTemplate.replace('{worksheet}', sheetName).replace('{html}', el.innerHTML)
  saveAs(new Blob(['\ufeff', contents], { type: contentType }), fileName)
}

export function exportExcelByHtml(html, fileName = 'download.xls', sheetName = 'Worksheet') {
  if (!html) throw new Error(`warning html`)
  const contents = htmlTemplate.replace('{worksheet}', sheetName).replace('{html}', html)
  saveAs(new Blob(['\ufeff', contents], { type: contentType }), fileName)
}

export default {
  exportExcelById: exportExcelById,
  exportExcelByHtml: exportExcelByHtml
}
