// Função para alternar entre os modos dark e light
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Seleciona a imagem do avatar
  const img = document.querySelector("#profile img")

  // Altera a imagem do avatar de acordo com o tema
  if (html.classList.contains("light")) {
    
    img.setAttribute("src", "assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/assets/avatar.png")
  }

  // Salva a preferência do tema no localStorage
  const isLightMode = html.classList.contains("light")
  localStorage.setItem("theme", isLightMode ? "light" : "dark")
}

// Verifica o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "light") {
  document.documentElement.classList.add("light")
  const img = document.querySelector("#profile img")
  img.setAttribute("src", "assets/assets/avatar-light.png")
}
