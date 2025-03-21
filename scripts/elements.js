const _es = {
    titleElement: document.querySelector("title"),
    inputField: document.querySelector("input"),
	outputElement: document.getElementById("output"),
	inputElement: document.getElementById("input"),
	inputPromptElement: document.getElementById("input").querySelector(".prompt"),
	inputPromptCwdElement: document.getElementById("cwd-path"),
	inputTextboxElement: document.getElementById("textbox"),
	inputTextboxBufferElement: document.getElementById("textbox").querySelector(".buffer"),
    inputTextboxCaretElement: document.getElementById("caret"),
	mobileInputElement: document.getElementById("mobile-input"),
};

((elements) => {
	for (let e in elements) if (elements[e] === null) throw Error(`Cannot find element: ${e}`);
})(_es);

export default _es;
