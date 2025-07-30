document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#revealForm");
  const input = document.getElementById("a");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const a = parseInt(input.value);

    if (isNaN(a) || a < 0 || a > 9) {
      result.textContent = "Please enter a valid single-digit number (0–9).";
      return;
    }

    const hasBirthday = confirm(
      "Have you already had your birthday this year?\nClick OK for Yes, Cancel for No."
    );
    const birthYearAD = parseInt(
      prompt("Enter your birth year in AD (e.g., 2000):")
    );

    const currentYearAD = new Date().getFullYear();
    const currentYearBS = currentYearAD + 57;

    if (
      isNaN(birthYearAD) ||
      birthYearAD > currentYearAD ||
      birthYearAD < 1900
    ) {
      result.textContent = "Please enter a valid birth year.";
      return;
    }

    const b = a * 2;
    const c = b + 5;
    const d = c * 50;
    const finalStep = d + (hasBirthday ? 1775 : 1774);
    const final = finalStep - birthYearAD;

    const pickedNumber = Math.floor(final / 100);
    const ageAD = final % 100;
    const birthYearBS = birthYearAD + 57;
    const ageBS = currentYearBS - birthYearBS;

    result.textContent = `🎉 Your number was: ${pickedNumber}
🧓 Your age (AD): ${ageAD} years
🗓️ Your age (BS): ${ageBS} years (Born in ${birthYearBS} BS)`;
  });
});
