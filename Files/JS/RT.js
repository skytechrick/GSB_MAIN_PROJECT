function RT() {
    let a = `<button type="button" onclick="Resend();" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
    let b = `<button type="button" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
    let Q = document.getElementsByClassName("BTNSS")[0];
    let J = document.getElementsByClassName("OTP_INPUT")[0].value;
    if (J == 6) {
        Q.innerHTML = a;
    } else {
        Q.innerHTML = b;
    }
}
