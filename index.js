(function () {
 
})()

const populateList = () => {
  renderList(genre, $genreList)
  renderList(singer, $singerList)
  renderList(tempo, $tempoList)
  renderList(goals, $goalsList)
  renderList(keyword, $keywordList)

}
const renderList = (categoryArray, categoryList) => {

  categoryList.innerHTML = ''
  for (let i = 0; i < categoryArray.length; i++){
    categoryList.innerHTML += `<li>${categoryArray[i]}</li>`

  }
  
}


const randomize = () => {
  const randomIndex = (source) => {

  return (source[Math.floor(Math.random() * source.length)])

  }

  $genreInput.value = randomIndex(genre)
  $singerInput.value = randomIndex(singer)
  $tempoInput.value = randomIndex(tempo)
  $goalsInput.value = randomIndex(goals)
  $keywordInput.value = randomIndex(keyword)
  $beatInput.value = randomIndex(randomBeat)
  
  
  return("randomizing...")
  
}
let submitIt = (category) => {
  
  switch (category) {
    case "genre":
      if ($genreInput.value !== ""){
     (confirm(`do you want to add ${$genreInput.value} to your list?`)) ? genre[genre.length] = $genreInput.value : console.log("nvm")}
     renderList(genre, $genreList)
      break
    case "singer":
      if ($singerInput.value !== "") {
      (confirm(`do you want to add ${$singerInput.value} to your list?`)) ? singer[singer.length] = $singerInput.value : console.log("nvm")}
      renderList(singer, $singerList)
      break
    case "tempo":
      if ($tempoInput.value !== "") {
      (confirm(`do you want to add ${$tempoInput.value} to your list?`)) ? tempo[tempo.length] = $tempoInput.value : console.log("nvm")}
      renderList(tempo, $tempoList)
      break
    case "goals":
      if ($goalsInput.value !== "") {
      (confirm(`do you want to add ${$goalsInput.value} to your list?`)) ? goals[genre.length] = $goalsInput.value : console.log("nvm")}
      renderList(goals, $goalsList)
      break
    case "keyword":
      if ($keywordInput.value !== "") {
      (confirm(`do you want to add ${$keywordInput.value} to your list?`)) ? keyword[keyword.length] = $keywordInput.value : console.log("nvm")}
      renderList(keyword, $keywordList)
      break
    default:
      break

  }
}
let showList = () => {
  
    if ($lists.style.visibility === 'hidden') {
      $lists.style.visibility = 'visible';
      populateList()
    } else {
      $lists.style.visibility = 'hidden';
    }
  }

  let name = ["Stephanie", "Voltaire", "Bryson"]
  let genre = ["Jazz", "Blues", "R & B", "Pop", "Trap/Dubstep"]
  let singer = ["Alicia Keys", "Michael Buble", "John Legend", "Lawrence", "Sumi Jo", "Boyz II Men"]
  let tempo = ["rubato", 93, 127, 58, 74, 139]
  let randomBeat = [1, 2, 3, 4, 5, 6, 7, 8]
  let goals = ["Jacob Collier", "ReHarm", "Sound Scaping/FX Heavy", "Accapella/Choir", "Rap/Word Heavy", "Percussion Heavy", "Acoustic" ,"staccato", "legato"]
  let keyword = ["rain", "hunger", "floating", "rebound", "penelope", "Narnia", "time travel", "Civility", "pots & pans", "sapphire"]

  
  let $genreInput = document.getElementById("genreInput")
  let $singerInput = document.getElementById("singerInput")
  let $tempoInput = document.getElementById("tempoInput")
  let $goalsInput = document.getElementById("goalsInput")
  let $keywordInput = document.getElementById("keywordInput")
  let $beatInput = document.getElementById("beatInput")
  let $randomize = document.getElementById("randomize")
  let $showList = document.getElementById("showList")
  let $lists = document.getElementById("lists")
  let $genreList = document.getElementById("genreList")
  let $singerList = document.getElementById("singerList")
  let $tempoList = document.getElementById("tempoList")
  let $goalsList = document.getElementById("goalsList")
  let $keywordList = document.getElementById("keywordList")
  let $beatList = document.getElementById("beatList")

  $randomize.addEventListener("click", randomize)
  $showList.addEventListener("click", showList)
  let submits = document.getElementsByClassName("inputBtn")
  for (let i = 0; i < submits.length; i++){
    submits[i].addEventListener("click", function(e) {

      let newEntry = e.target.id.replace("Submit", "")
      submitIt(newEntry)
      

    })
  }
  


