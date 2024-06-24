const endDate = "30 sep 2024 11:11 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if(diff < 0) return;
            // Convert into days 
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

        // Initial Coll ya ak baar ho gaa
clock();

            // setinterval sa ya ho ge ke ya bar baar call ho khud ba khud 
setInterval (
    () => {
        clock()
    },
    1000
)
