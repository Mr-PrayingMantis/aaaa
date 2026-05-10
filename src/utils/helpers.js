export function setButtonText(
    btn,
     isloading,
     loadingText = "Saving...",
     defaultText = "Save") {
    if (isloading) {
        btn.textContent = (`${loadingText}`);
        //submitBtn.textContent = "Saving..."
        //console.log(`beans are better then ${loadingText}`)
    } else {
        btn.textContent = (`${defaultText}`);
    }
}