// pdf.js
window.pdfjsLib = {
  getDocument: function () {
    console.log("pdfjsLib simulé : getDocument appelé");
    return {
      promise: Promise.resolve({
        numPages: 2,
        getPage: (n) => Promise.resolve({
          getTextContent: () => Promise.resolve({
            items: [{ str: "Page " + n }]
          })
        })
      })
    };
  }
};
