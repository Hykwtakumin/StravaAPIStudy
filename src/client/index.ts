window.onload = async  () => {
    const message = window["message"];
    if (message != undefined) {
        console.log(`message : ${message}`);
        alert(message);
    }
};