const modelViewer = document.querySelector("model-viewer#pickMaterial");
modelViewer.addEventListener("load", myFunction);
function myFunction() {
	const material = modelViewer.model.getMaterialByName("Overview");
    if (material != null) {
      material.pbrMetallicRoughness.
        setBaseColorFactor("blue");
    }
}