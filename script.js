const token = "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"
const inputTXT = document.getElementById('inputtxt')
const button = document.getElementById('btn')
const image = document.getElementById('img')

async function query() {
	image.src = "/img/loading_____.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: { Authorization: `Bearer ${token}` },
			method: "POST",
			body: JSON.stringify({"inputs" : inputTXT.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click',async function(){
	inputTXT.value = '';
	
    query().then((response) => {
        const objURL = URL.createObjectURL(response)
        image.src = objURL
    });
})
