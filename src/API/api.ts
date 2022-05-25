export let beersObject = [
    {name: "Sagres", description: "Beer", year: 2001, producer: "Sagres", picture: "https://pics.clipartpng.com/midle/Beer_Bottle_Green_PNG_Clipart-624.png"},
    {name: "Pilsner", description: "Beer", year: 2010, producer: "Pilsner", picture: "https://pics.clipartpng.com/midle/Beer_Bottle_Green_PNG_Clipart-624.png"},
    {name: "Carling", description: "Beer", year: 2017, producer: "Carling", picture: "https://pics.clipartpng.com/midle/Beer_Bottle_Green_PNG_Clipart-624.png"}

]
  
export let winesObject = [
    {name: "Pias", description: "Wine", year: 2009 , producer: "Dão", picture: "https://pics.clipartpng.com/midle/Wine_Bottle_PNG_Clipart-98.png"},
    {name: "Cartuxa", description: "Wine", year: 2018, producer: "Ad", picture: "https://pics.clipartpng.com/midle/Wine_Bottle_PNG_Clipart-98.png"},
    {name: "Presidente", description: "Wine", year: 2020,  producer: "Borba", picture: "https://pics.clipartpng.com/midle/Wine_Bottle_PNG_Clipart-98.png"}
]

export let comment = [
    {name: "John Williams", email: "john@email.com", text: "Portugal has the best wines", hour: new Date().toLocaleTimeString() }
]

localStorage.setItem("UserComment", JSON.stringify(comment))

export let information = ["Name", "Year", "Producer"]




