const plants = [
    { name: "Tomateiro", description: "Uma planta de tomateiro comum.", image: "tomateiro.jpg" },
    { name: "Tomateiro Cherry", description: "Uma variedade de tomateiro com tomates pequenos e doces.", image: "tomateiro_cherry.jpg" },
    { name: "Tomateiro Coracao de Boi", description: "Uma variedade de tomateiro com tomates grandes e carnudos.", image: "tomateiro_coracao_de_boi.jpg" },
    { name: "Tomateiro Preto", description: "Uma variedade de tomateiro com tomates de cor escura.", image: "tomateiro_preto.jpg" },
    { name: "Tomateiro Chucha", description: "Uma variedade de tomateiro com tomates alongados.", image: "tomateiro_chucha.jpg" },
    { name: "Salsa", description: "Uma erva aromatica comum na culinaria.", image: "salsa.jpg" },
    { name: "Cebola", description: "Uma planta bulbosa comum na culinaria.", image: "cebola.jpg" },
    { name: "Pimento", description: "Uma variedade de pimenta.", image: "pimento.jpg" },
    { name: "Courgette", description: "Uma planta comestivel da familia da abobora.", image: "courgette.jpg" },
    { name: "Macieira", description: "Uma arvore frutifera que produz macas.", image: "macieira.jpg" },
    { name: "Berinjela", description: "Uma planta de fruto comestivel de cor roxa.", image: "berinjela.jpg" },
    { name: "Feijao", description: "Uma planta leguminosa com vagens comestiveis.", image: "feijao.jpg" },
    { name: "Ameixa", description: "Uma arvore frutifera que produz ameixas.", image: "ameixa.jpg" },
    { name: "Nogueira", description: "Uma arvore que produz nozes.", image: "nogueira.jpg" },
    { name: "Cebolinho", description: "Uma erva aromatica.", image: "cebolinho.jpg" },
    { name: "Couve", description: "Hortalica verde de folhas encaracoladas, nutritiva e versatil", image: "couve.jpg"},
    { name: "Alface Roxa", description: "Hortalica de folhas roxas, crocante e sabor suave", image: "alfaceR.jpg"}, 
  ];
  
  const plantList = document.getElementById("plantList");
  const plantInfo = document.getElementById("plantInfo");
  
  // Função para exibir a lista de plantas
  function displayPlantList() {
    plantList.innerHTML = "";
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      const listItem = document.createElement("li");
      listItem.textContent = plant.name;
      listItem.addEventListener("click", function() {
        displayPlantInfo(plant);
      });
      plantList.appendChild(listItem);
    }
  }
  
  // Função para exibir as informações da planta selecionada
  function displayPlantInfo(plant) {
    plantInfo.innerHTML = "";
    
    const plantBox = document.createElement("div");
    plantBox.classList.add("plantBox");
    
    const plantImage = document.createElement("img");
    plantImage.src = plant.image;
    plantImage.alt = plant.name;
    plantImage.classList.add("plantImage");
    plantBox.appendChild(plantImage);
    
    const plantName = document.createElement("h2");
    plantName.textContent = plant.name;
    plantName.classList.add("plantName");
    plantBox.appendChild(plantName);
    
    const plantDescription = document.createElement("p");
    plantDescription.textContent = plant.description;
    plantBox.appendChild(plantDescription);
    
    plantInfo.appendChild(plantBox);
  }
  
  // Função para filtrar as plantas com base no texto de pesquisa
  function searchPlants() {
    const searchText = searchInput.value.toLowerCase();
    const filteredPlants = plants.filter(function(plant) {
      return plant.name.toLowerCase().includes(searchText);
    });
    displayFilteredPlantList(filteredPlants);
  }
  
  // Função para exibir a lista de plantas filtradas
  function displayFilteredPlantList(filteredPlants) {
    plantList.innerHTML = "";
    for (let i = 0; i < filteredPlants.length; i++) {
      const plant = filteredPlants[i];
      const listItem = document.createElement("li");
      listItem.textContent = plant.name;
      listItem.addEventListener("click", function() {
        displayPlantInfo(plant);
      });
      plantList.appendChild(listItem);
    }
  }
  
  const search_Input = document.getElementById("searchInput");
  search_Input.addEventListener("input", searchPlants);
  
  // Exibe a lista de plantas ao carregar a página
  displayPlantList();

  const searchInput = document.getElementById("searchInput");
  const audio = document.getElementById("audio");
  
  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && document.activeElement === searchInput) {
      playSound();
    }
  });
  
  function playSound() {
    audio.currentTime = 0;
    audio.play();
  }