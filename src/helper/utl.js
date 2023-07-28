export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  export function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/; // regex for 10 digit phone number
    return phoneRegex.test(phoneNumber);
  }


  export const addToLocal = (mykey,value) => {
    localStorage.setItem(mykey, value);
  };

  export const shorDate=(longDate)=>{
    const newLongDate = new Date(longDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = newLongDate.toLocaleDateString('en-US', options);
    return formattedDate
  }

 
  export function slugify1(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }


export  function slugify(text) {
    text = text.toLowerCase();
    text = text.replace(/[\u0600-\u06FF]/g, function (match) {
      return String.fromCharCode(match.charCodeAt(0) + 0x0600 - 0xFEFF);
    });
    text = text.replace(/[^\w\s-]/g, '');
    text = text.replace(/[\s_-]+/g, '-');
    text = text.replace(/^-+|-+$/g, '');
    return text;
  }

export   const reaplaceSpace = (data) => {
    data = data.replace(/ /g, "-");
    return data;
  };


  export  const getUser=()=>{
    let userId,userMail,userPhone;
     userId=localStorage.getItem("userId")
     userMail=localStorage.getItem("mail")
     userPhone=localStorage.getItem("phone")
    return {userId,userMail,userPhone}


  }