// ---------- Task 3: Light/Dark mode ----------
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// ---------- Task 8: Opening status ----------
const hour = new Date().getHours();
const status = document.getElementById("status");

if (hour >= 8 && hour < 17) {
  status.textContent = "We are Open!";
  status.style.color = "lightgreen";
} else {
  status.textContent = "Closed - Open at 8 AM";
  status.style.color = "red";
}

// ---------- Task 6: Read More / Read Less ----------
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

readMoreBtn.addEventListener("click", function () {
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});

// ---------- Task 2: Table row highlight ----------
const rows = document.querySelectorAll("tbody tr");

rows.forEach(function (row) {
  row.addEventListener("mouseover", function () {
    row.style.backgroundColor = "yellow";
    row.style.color = "black";
  });

  row.addEventListener("mouseout", function () {
    row.style.backgroundColor = ""; // wapis normal
    row.style.color = "";
  });
});

// ---------- Task 7: Category filter ----------
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const choice = btn.textContent; // All, Academic, Events, Sports

    rows.forEach(function (row) {
      if (choice === "All" || row.dataset.category === choice) {
        row.style.display = ""; // dikhao
      } else {
        row.style.display = "none"; // chhupao
      }
    });
  });
});

// ---------- Task 4: Order total ----------
const items = document.querySelectorAll(".item");
const totalText = document.getElementById("total");

items.forEach(function (item) {
  item.addEventListener("change", function () {
    let total = 0;
    items.forEach(function (box) {
      if (box.checked) {
        total = total + Number(box.value);
      }
    });
    totalText.textContent = "Total: Rs. " + total;
  });
});

// ---------- Task 9: Character counter ----------
const request = document.getElementById("request");
const charCount = document.getElementById("charCount");

request.addEventListener("input", function () {
  const left = 100 - request.value.length;
  charCount.textContent = left + " characters remaining";
});

// ---------- Task 1 + 5: Form submit and age check ----------
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page refresh nahi hoga

  // Task 1: name aur email read karo
  const username = document.getElementById("username").value;
  const email = document.getElementById("useremail").value;
  const formMessage = document.getElementById("formMessage");

  if (username !== "" && email !== "") {
    formMessage.textContent = "Thank you for visiting, " + username + "! We will contact you at " + email + ".";
  } else {
    formMessage.textContent = "Please fill both name and email.";
  }

  // Task 5: birth year ko number banao (parseInt)
  const birthYear = parseInt(document.getElementById("birth-year").value);
  const discountMessage = document.getElementById("discountMessage");

  if (isNaN(birthYear)) {
    discountMessage.textContent = "Please enter a valid birth year.";
  } else {
    const age = 2026 - birthYear;
    if (age <= 25 || age >= 60) {
      discountMessage.textContent = "Your age is " + age + ". You qualify for the student/senior discount!";
    } else {
      discountMessage.textContent = "Your age is " + age + ". Sorry, no discount available.";
    }
  }
});