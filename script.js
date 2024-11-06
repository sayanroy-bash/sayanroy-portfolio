function downloadResume() {
  const link = document.createElement('a');
  link.href = "./SayanRoy-FrontendDeveloper(React)-NUhj.pdf";
  link.download = "SayanRoy-FrontendDeveloper(React)-NUhj.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

  