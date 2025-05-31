document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page-content');
  const notification = document.getElementById('copy-notification');
  let currentPage = localStorage.getItem('currentPage') || 'home';

  // โหลดหน้า
  function loadPage(page) {
    pages.forEach(p => p.classList.remove('active'));
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) pageElement.classList.add('active');
    localStorage.setItem('currentPage', page);
  }

  loadPage(currentPage);

  // อัปเดตเมนู active
  navLinks.forEach(navLink => {
    navLink.classList.toggle('active', navLink.getAttribute('data-page') === currentPage);
    navLink.addEventListener('click', e => {
      if (navLink.tagName.toLowerCase() === 'a') e.preventDefault();
      const targetPage = navLink.getAttribute('data-page');
      if (targetPage === currentPage) return;
      currentPage = targetPage;
      loadPage(currentPage);
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('data-page') === targetPage));
    });
  });

  // แสดงการแจ้งเตือนเมื่อคัดลอกสำเร็จ
  function showNotification() {
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 2000);
  }

  async function copyTextAndNotify(text) {
    try {
      await navigator.clipboard.writeText(text);
      showNotification();
    } catch {
      const temp = document.createElement('textarea');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      showNotification();
    }
  }

  // กำหนดให้กล่องข้อความ output และ chat-box คัดลอกได้
  const copyableBoxes = document.querySelectorAll('.chat-box, [id^="output"], [id^="noteOutput"]');

  copyableBoxes.forEach(box => {
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
      const textToCopy = box.innerText.trim();
      copyTextAndNotify(textToCopy);
    });
  });
});

// --------------------------
// 🎁 ฟังก์ชันโปรโมชั่น (สายเปย์ / ฝากแรก)
// --------------------------

function generateBonusText() {
  const user = document.getElementById('user').value;
  const bonus = document.getElementById('bonus').value;
  const name = document.getElementById('name').value;
  
  const note = `โปรโมชั่น : สายเปย์ ${bonus} บาท`;

  document.getElementById('output1').innerText = 
`🧩 ดำเนินการเติมโบนัส 🧩
โปรโมชั่นสายเปย์

User : ${user}
ยอดเติมเครดิต  : ${bonus}

ขอให้วันนี้เป็นวันที่ดี มีความสุข
ขอบคุณที่ให้โอกาสเรา
ได้ดูแลนะคะ❤️`;

  document.getElementById('output2').innerText = 
`โปรโมชั่น: สายเปย์ 🧩
🧩ชื่อลูกค้า: ${name}
🧩User: ${user}
🧩ยอดเติมเครดิต: ${bonus}
🧩ผู้เติม: TA 🧩`;

  document.getElementById ('outputNote1').innerText = `โปรโมชั่น : สายเปย์ ${bonus} บาท`;
}

function generateBonusText2() {
  const user = document.getElementById('user2').value;
  const deposit = Number(document.getElementById('deposit2').value) || 0;
  const name = document.getElementById('name2').value;

  const bonus = Math.round(deposit * 0.03);              // คำนวณ
  const bonusText = `${bonus} บาท`;                      // แสดงผล


  const note = `โปรโมชั่น : โบนัสยอดฝากแรก 3% ทุกวัน ${bonus} บาท`;

  document.getElementById('output3').innerText = 
`🧩 ดำเนินการเติมโบนัส 🧩
โปรโมชั่น ฝากแรกรับ 3 %

User : ${user}
ยอดฝาก : ${deposit} บาท
โบนัสที่ได้รับ : ${bonus} บาท

ขอให้วันนี้เป็นวันที่ดี มีความสุข
ขอบคุณที่ให้โอกาสเรา
ได้ดูแลนะคะ❤️`;

  document.getElementById('output4').innerText = 
`🧩 โปรโมชั่น : ฝากแรกรับ 3 % 🧩
🧩 ชื่อลูกค้า : ${name}
🧩 User : ${user}
🧩 ยอดเติมเครดิต : ${bonus} บาท
🧩 เติมโดย : TA 🧩`;

  document.getElementById('outputNote2').innerText = `โปรโมชั่น : โบนัสยอดฝากแรก 3% ทุกวัน ${bonus} บาท`;
}


// --------------------------
// 🔁 เข้าฟรีเกม X10
// --------------------------

function generateBonusText3() {
  const user = document.getElementById('user3').value;
  const billNumber = document.getElementById('billNumber').value;
  const priceBet = Number(document.getElementById('priceBet').value) || 0;
  const name = document.getElementById('name3').value;
  const dayTime = document.getElementById('dayTime').value;

  const betValue = `${priceBet} บาท`;
  const bonusAmount = priceBet * 10;

  const note = `โปรโมชั่น เข้าฟรี รับฟรี x10 | #${billNumber} | เบท ${priceBet}/${deposit} บาท บิลวันที่ ${dayTime}`;

  document.getElementById('output5').innerText = 
`🧩 ดำเนินการเติมโบนัส 🧩
โปรเข้าฟรีเกมส์ X10

User : ${user}
หมายเลขบิล : ${billNumber}

เล่นเข้าฟรีเกมที่เบท : ${betValue} x10 เท่า
จึงได้รับโบนัสเพิ่มจากครั้งนี้ : ${bonusAmount} บาท

ขอให้วันนี้เป็นวันที่ดี มีความสุข
ขอบคุณที่ให้โอกาสเรา
ได้ดูแลนะคะ❤️`;

  document.getElementById('output6').innerText = 
`🧩 ชื่อโปร : เข้าฟรีเกม X10 เท่า 🧩
🧩 ชื่อลูกค้า : ${name}
🧩 User : ${user}
🧩 หมายเลขบิล : ${billNumber}
🧩 ยอดเบท : ${betValue}
🧩 ยอดโบนัสที่เติมให้ลูกค้า : ${bonusAmount} บาท
🧩 บิลเวลา : ${dayTime}
🧩 ชื่อผู้เติม : TA 🧩`;

  document.getElementById('outputNote3').innerText = `โปรโมชั่น เข้าฟรี รับฟรี x10 | ${billNumber} | เบท ${priceBet}/${priceBet*10} บาท บิลวันที่ ${dayTime}`;
}

// --------------------------
// 📊 สเต็ปผิดหมด (step 4)
// --------------------------

function generateBonusText4() {
  const user = document.getElementById('user4').value;
  const billNumber = document.getElementById('billNumber4').value;
  const priceBet = Number(document.getElementById('priceBet4').value) || 0;
  const name = document.getElementById('name4').value;
  const dayTime = document.getElementById('dayTime4').value;
  const step = Number(document.getElementById('step4').value) || 0;

  let multiplier = 1;
  if ([5, 6].includes(step)) multiplier = 2;
  else if ([7, 8].includes(step)) multiplier = 4;

  const deposit = priceBet * multiplier;
  document.getElementById('deposit4').value = deposit + ' บาท';

  document.getElementById('output7').innerText = 
`🧩 ดำเนินการเติมโบนัส 🧩
สเต็ปผิดหมด

User : ${user}
หมายเลขบิล : ${billNumber}
ยอดเดิมพัน : ${priceBet} บาท
ยอดเติม : ${deposit} บาท
Name : ${name}
Day & Time : ${dayTime}
Step : ${step}

ขอให้วันนี้เป็นวันที่ดี มีความสุข
ขอบคุณที่ให้โอกาสเรา
ได้ดูแลนะคะ❤️`;

  document.getElementById('output8').innerText = 
`🧩 ชื่อโปร : สเต็ปผิดหมด 🧩
🧩 ชื่อลูกค้า : ${name}
🧩 User : ${user}
🧩 หมายเลขบิล : ${billNumber}
🧩 ยอดเบท : ${priceBet} บาท → สเต็ป ${step}
🧩 ยอดโบนัสที่เติมให้ลูกค้า : ${deposit} บาท
🧩 บิลเวลา : ${dayTime}
🧩 ชื่อผู้เติม : TA 🧩`;

  document.getElementById('outputNote4').innerText = `โปรโมชั่น คอบอลสเต็ป-คอมวยสเต็ป  | ${billNumber} | สเต็ป ${step} ยอดเติม ${deposit} บาท บิลวันที่ ${dayTime} น.`;
}

// --------------------------
// 📝 ฟังก์ชันสำหรับข้อความ note (note1, note2)
// --------------------------

// ✅ สร้างข้อความโน้ตให้แต่ละกล่อง
function generateNote(index, type = "default") {
  const gameId = document.getElementById(`billNumber${index}`)?.value || "PGXXXXXXXXXXXXXX";
  const bet = document.getElementById(`priceBet${index}`)?.value || "0";
  const amount = document.getElementById(`deposit${index}`)?.value || "0";
  const datetime = document.getElementById(`dayTime${index}`)?.value || new Date().toLocaleString("th-TH");

  let noteText = "";
  if (type === "special") {
    noteText = `โปรพิเศษรายวัน | #${gameId} | เบท ${bet}/${amount} บาท | วันที่ ${datetime}`;
  } else {
    noteText = `โปรโมชั่น เข้าฟรี รับฟรี x10 | #${gameId} | เบท ${bet}/${amount} บาท บิลวันที่ ${datetime}`;
  }

  const output = document.getElementById(`outputNote${index}`);
  if (output) output.innerText = noteText;
}

// ✅ ผูก Event Listener ให้ฟิลด์เปลี่ยนแล้วอัปเดต note อัตโนมัติ
function attachNoteListeners(index, type = "default") {
  const fields = [
    `billNumber${index}`,
    `priceBet${index}`,
    `deposit${index}`,
    `dayTime${index}`
  ];

  fields.forEach(fieldId => {
    const input = document.getElementById(fieldId);
    if (input) {
      input.addEventListener("input", () => generateNote(index, type));
    }
  });
}

// ✅ รอ DOM โหลดก่อนทำงาน
document.addEventListener("DOMContentLoaded", () => {
  // ปุ่ม Submit สำหรับ Note 3 (กล่อง 3)
  document.getElementById("submitNote3")?.addEventListener("click", () => {
    generateNote(3, "default");
  });

  // ปุ่ม Submit สำหรับ Note 4 (กล่อง 4)
  document.getElementById("submitNote4")?.addEventListener("click", () => {
    generateNote(4, "special");
  });

  // ระบบ auto-update ระหว่างพิมพ์
  attachNoteListeners(3, "default");
  attachNoteListeners(4, "special");

  // กล่องที่คัดลอกได้
  const copyableBoxes = document.querySelectorAll('.chat-box, [id^="output"], [id^="noteOutput"], [id^="outputNote"]');
  copyableBoxes.forEach(box => {
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
      const textToCopy = box.innerText.trim();
      copyTextAndNotify(textToCopy);
    });
  });

  // แสดงหน้าปัจจุบัน (ต้องมีตัวแปร `page`)
  pages.forEach(p => p.classList.remove('active'));
  const pageElement = document.getElementById(`${page}-page`);
  if (pageElement) pageElement.classList.add('active');
});

