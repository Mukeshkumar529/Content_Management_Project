const image_Input = document.getElementById('input_file');
const image_Display = document.getElementById('image_display');

image_Input.addEventListener('change', function () {
    const file = image_Input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;
            while (image_Display.firstChild) {
                imageContainer.removeChild(imageContainer.firstChild);
            }
            image_Display.appendChild(image);
        };

        reader.readAsDataURL(file);
    }
});