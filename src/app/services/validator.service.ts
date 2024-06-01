import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

 //Reactive Form 驗證用
export class ValidatorService {

  constructor() { }

  validateIdentity(identity: string): boolean {
    const phoneRegex = /^09\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return phoneRegex.test(identity) || emailRegex.test(identity);
  }

  validateContact(identity: string): boolean {
    const phoneRegex = /^09\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return phoneRegex.test(identity) || emailRegex.test(identity);
  }

  validateUserName(userName: string): boolean {
    // 修改這些值以符合您的具體驗證規則
    const minLength = 6;
    const maxLength = 12;
    const validPattern = /^[A-Za-z0-9]+$/; // 只允許字母和數字

    // 檢查長度是否在允許的範圍內
    if (userName.length < minLength || userName.length > maxLength) {
      return false;
    }

    // 檢查用戶名是否只包含字母和數字
    if (!validPattern.test(userName)) {
      return false;
    }

    // 選擇性檢查：確保用戶名不是純數字
    if (!isNaN(Number(userName))) {
      return false;
    }

    // 如果所有條件都滿足，返回 true
    return true;
  }

  validatePassword(password: string): boolean {
    // 長度檢查：8-20個字符
    if (password.length < 8 || password.length > 20) {
      return false;
    }

    // 包含至少一個小寫字母
    const hasLowerCase = /[a-z]/.test(password);
    // 包含至少一個大寫字母
    const hasUpperCase = /[A-Z]/.test(password);
    // 包含至少一個數字
    const hasNumber = /\d/.test(password);
    // 包含至少一個符號（非字母數字字符）
    const hasSymbol = /\W/.test(password);

    return hasLowerCase && hasUpperCase && hasNumber && hasSymbol;

  }

  validateAmount(amount: number | null): boolean {
   // console.log("ss"+amount);
    return amount !== null && amount > 0;
  }

  //檢查轉帳備註
  validateNote(note: string): boolean {
    const noteRegex = /^[^\s@]{0,50}$/;
    return note.length <= 50 && noteRegex.test(note);
  }

  //檢查身分證字號
  validateTaiwanId(id: string): boolean {
    id = id.trim();
    const verification = id.match("^[A-Z][12]\\d{8}$");
    if (!verification) {
        return false;
    }

    const conver = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];

    id = String(conver.indexOf(id[0]) + 10) + id.slice(1);

    let checkSum = 0;
    for (let i = 0; i < id.length; i++) {
        const c = parseInt(id[i]);
        const w = weights[i];
        checkSum += c * w;
    }

    return checkSum % 10 === 0;
  }

  //檢查統一編號
  validateTaiwanBusinessId(id: string): boolean {
    const pattern = /^\d{8}$/; // 統一編號必須是8位數字
    if (!pattern.test(id)) {
      return false;
    }

    const weights = [1, 2, 1, 2, 1, 2, 4, 1]; // 加權值
    const digits = id.split('').map(num => parseInt(num, 10));
    let sum = digits.reduce((acc, digit, index) => {
      let product = digit * weights[index];
      if (product >= 10) {
        product = Math.floor(product / 10) + (product % 10); // 取乘積的個位數和十位數相加
      }
      return acc + product;
    }, 0);

    // 如果總和能被10整除，或者第七位數字是7且總和加1能被10整除，則是有效的統一編號
    return (sum % 10 === 0) || (digits[6] === 7 && (sum + 1) % 10 === 0);
  }

  //檢查銀行帳號14碼
  validateBankAccount(account: string): boolean {
    const accountPattern = /^\d{14}$/;
    return accountPattern.test(account);
  }

  //行動電話驗證
  validateTaiwanMobilePhone(phone: string): boolean {
    const phonePattern = /^09\d{8}$/; // 檢查是否為09開頭，後面跟隨8位數字
    return phonePattern.test(phone);
  }

  //驗證金額格式
  validateIntegerAmount(amount: string): boolean {
    // 這個正則表達式匹配非負整數
    const amountPattern = /^\d+$/;
    return amountPattern.test(amount);
  }

 // 正則表達式匹配格式為 yyyy-mm-dd 的日期
  validateDateFormat(date: string): boolean {
    const dateFormatPattern = /^\d{4}-\d{2}-\d{2}$/;
    return dateFormatPattern.test(date);
  }


  //檢查日期
  validateDate(date: string): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const thirtyDaysLater = new Date();
    thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 30);
    const effectiveDateValue = new Date(date);
    return effectiveDateValue >= currentDate && effectiveDateValue <= thirtyDaysLater;
  }

  validateBirthDate(birthDate: string): boolean {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    // 檢查出生日期是否是有效日期並且不是未來的日期
    if (isNaN(birthDateObj.getTime()) || birthDateObj > today) {
      return false;
    }

    // 檢查年齡是否不超過100歲
    const hundredYearsAgo = new Date();
    hundredYearsAgo.setFullYear(today.getFullYear() - 100);

    if (birthDateObj < hundredYearsAgo) {
      return false;
    }

    return true;
  }

  //檢查銀行代碼
  validateBankCode(code: string): boolean {
    // 正則表達式匹配三位數字
    const codePattern = /^\d{3}$/;
    return codePattern.test(code);
  }

  //驗證信用卡號
  validateCreditCardNumber(cardNumber: string): boolean {
    let sum = 0;
    const numDigits = cardNumber.length;
    const parity = numDigits % 2;

    for (let i = 0; i < numDigits; i++) {
      let digit = parseInt(cardNumber.charAt(i));

      if (i % 2 === parity) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }

      sum += digit;
    }

    return (sum % 10) === 0;
  }

  validateCVV(cvv: string): boolean {
    return /^[0-9]{3,4}$/.test(cvv);
  }
}






