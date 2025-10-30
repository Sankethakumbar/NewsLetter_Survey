
// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDeQBsWcAy1xGsePeHIwT3UioMr-N27ejk",
  authDomain: "newsletter-survey.firebaseapp.com",
  projectId: "newsletter-survey",
  storageBucket: "newsletter-survey.firebasestorage.app",
  messagingSenderId: "612421086409",
  appId: "1:612421086409:web:a6227eff14bae4c8e73118",
  measurementId: "G-P7E454LP4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//  GOOGLE SIGN-IN
const googleBtn = document.getElementById("googleBtn");
if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("✅ Signed in with Google!");
      window.location.href = "survey.html";
    } catch (error) {
      alert("❌ Failed: " + error.message);
    }
  });
}

//  index.html
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
      alert("✅ Account created successfully!");
      window.location.href = "survey.html";
    } else {
      alert("⚠️ Please enter both email and password!");
    }
  });
}

//survey.html
const surveyForm = document.getElementById("surveyForm");
if (surveyForm) {
  surveyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "thankyou.html"; // go to thank you page
  });
}
