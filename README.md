# 隨機密碼產生器 Random Password Generator
此專案為 ALPHA Camp Dev C3 挑戰project 所製作。  
運用 Node.js 與 Express 建立本機伺服器，在伺服器運行期間可根據選項產生隨機密碼。

## 版本 (Version)
- v1.0.1 (目前版本)

## 功能 (Features)
- 產生長度為 4 ~ 16 碼的隨機密碼，使用者可在此範圍內指定密碼長度
- 使用者可選擇要包含的字元種類（小寫字母、大寫字母、數字、符號），密碼中將包含至少一個被指定的字元種類
- 不勾選任何字元種類時，預設將從全部種類的字元組裡隨機挑選字母組成符合長度的密碼
- 使用者可於「Exclude Characters」欄位輸入欲排除的字元，輸入於此欄位的字元將不會出現於密碼中
- 當勾選字元種類與排除字元相衝突時，會產生警告提示。（例如：勾選「Numbers」，但「Exclude Characters」中輸入「0123456789」）
- 可透過點選「Copy」按鈕一鍵複製產生的密碼

#### 開發中 (Under Development)
- 歷史紀錄頁面：儲存並顯示使用者產生的密碼紀錄）

## 執行環境 (RTE)
[Node.js](https://nodejs.org/) (v18.18.0)  
ℹ️ *執行此專案前，需安裝 Node.js。*

## 安裝 (Installation)
1. 開啟終端機 (Terminal)，cd 至存放本專案的資料夾，執行以下指令將本專案 clone 至本機電腦。

```
git clone https://github.com/letitia-chiu/pw-generator.git
```

2. 進入此專案資料夾

```
cd pw-generator
```

3. 執行以下指令以安裝套件

```
npm install
```

4. 執行下列指令來啟動伺服器 

```
npm run dev
```

當 Terminal 出現以下字樣，即代表伺服器啟動成功：  
`Express server is running on http://localhost:3000`  
現在，您可開啟任一瀏覽器輸入 http://localhost:3000 來使用隨機密碼產生器。

## 使用工具 (Tools)
- 開發環境：[Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/)
- 應用程式框架：[Express](https://www.npmjs.com/package/express)
- 樣版引擎：[Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- 樣式框架：[Bootstrap v5.1](https://getbootstrap.com/docs/5.1/getting-started/download/)

## 開發者 (Contributor)
[Letitia Chiu](https://github.com/letitia-chiu)
