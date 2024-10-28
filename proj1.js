
document.addEventListener("DOMContentLoaded", ()  {
    const forgetPasswordLink = document.getElementById("forget-password");
    const forgetPasswordModal = document.getElementById("forget-password-modal");
    const forgetPasswordForm = document.getElementById("forget-password-form");
    const signUpLink = document.getElementById("sign-up");
    const signUpModal = document.getElementById("sign-up-modal");

    forgetPasswordLink.addEventListener("click", (event)  {
        event.preventDefault();
        forgetPasswordModal.style.display = "block";
    });

    forgetPasswordForm.addEventListener("submit", (event)  {
        event.preventDefault();

        alert("OTP sent successfully. Please enter the OTP to reset your password.");
        
        const resendOtpLink = document.createElement("a");
        resendOtpLink.href = "#";
        resendOtpLink.innerText = "Resend OTP";
        resendOtpLink.style.display = "block";
        resendOtpLink.style.marginTop = "10px";
        resendOtpLink.style.color = "blue";
        
        resendOtpLink.addEventListener("click", (e)  {
            e.preventDefault();
            alert("OTP has been resent.");
        });

        if (!forgetPasswordModal.contains(resendOtpLink)) {
            forgetPasswordModal.appendChild(resendOtpLink);
        }
    });

    signUpLink.addEventListener("click", (event)  {
        event.preventDefault();
        window.location.href = "signup.html"; 
    });

    window.addEventListener("click", (event)  {
        if (event.target === forgetPasswordModal) {
            forgetPasswordModal.style.display = "none";
        }
        if (event.target === signUpModal) {
            signUpModal.style.display = "none";
        }
    });
});
