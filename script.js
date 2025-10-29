// ✅ Firebase CDN imports (NO import keyword needed here)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDeQBsWcAy1xGsePeHIwT3UioMr-N27ejk",
  authDomain: "newsletter-survey.firebaseapp.com",
  projectId: "newsletter-survey",
  storageBucket: "newsletter-survey.firebasestorage.app",
  messagingSenderId: "612421086409",
  appId: "1:612421086409:web:a6227eff14bae4c8e73118",
  measurementId: "G-P7E454LP4Q"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Google Sign-in Button Listener
document.getElementById("googleBtn").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    alert("✅ Signed in with Google!");
    window.location.href = "survey.html";
  } catch (error) {
    alert("❌ Failed: " + error.message);
  }
});

document.getElementById("surveyForm").addEventListener("submit", function (e) {
            e.preventDefault(); // stops page refresh
            window.location.href = "thankyou.html"; // redirect to thank you page
        });