const scrollBtn = document.getElementById("scrollBtn");
const yearEl = document.getElementById("year");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyToast = document.getElementById("copyToast");

yearEl.textContent = new Date().getFullYear();

// Smooth scroll to About section
scrollBtn?.addEventListener("click", () => {
  const about = document.querySelector("#about");
  about?.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Copy email (edit this!)
const EMAIL = "layyana.junaid@email.com";

copyEmailBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyToast.textContent = "Copied! ✨";
    setTimeout(() => (copyToast.textContent = ""), 1800);
  } catch (e) {
    copyToast.textContent = "Couldn’t copy — just email me directly 💌";
    setTimeout(() => (copyToast.textContent = ""), 2200);
  }
});

const openResume = document.getElementById("openResume");
const closeResume = document.getElementById("closeResume");
const resumeModal = document.getElementById("resumeModal");

openResume?.addEventListener("click", () => {
  resumeModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeResume?.addEventListener("click", () => {
  resumeModal.classList.remove("active");
  document.body.style.overflow = "";
});

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");

openLetter?.addEventListener("click", () => {
  letterModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeLetter?.addEventListener("click", () => {
  letterModal.classList.remove("active");
  document.body.style.overflow = "";
});

