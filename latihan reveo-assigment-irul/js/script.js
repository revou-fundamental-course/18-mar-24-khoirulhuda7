function submitForm() {
    // Mengambil nilai dari input nama, email, dan opsi
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var opsi = document.getElementById("opsi").value;

    // Validasi input
    if (name.trim() === "" || email.trim() === "" || opsi === "Select Option") {
        alert("Please fill in all fields.");
        return;
    }

    // Validasi email menggunakan regular expression
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Kirim data menggunakan AJAX (di sini saya hanya menampilkan pesan sukses sebagai contoh)
    alert("Thank you for your interest! Your form has been submitted successfully.");
}
