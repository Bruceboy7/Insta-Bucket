let bucket = {
  "name" : ["Stephanie", "Voltaire", "Bryson"],
  "genre" : ["Jazz", "Blues", "R & B", "Pop", "Trap/Dubstep"],
  "singer" : ["Alicia Keys", "Michael Buble", "John Legend", "Lawrence", "Sumi Jo", "Boyz II Men"],
  "tempo" : ["rubato", 93, 127, 58, 74, 139],
  "randomBeat" : [1, 2, 3, 4, 5, 6, 7, 8],
  "goals" : ["Jacob Collier", "ReHarm", "Sound Scaping/FX Heavy", "Accapella/Choir", "Rap/Word Heavy", "Percussion Heavy", "Acoustic" ,"staccato", "legato"],
  "keyword" : ["rain", "hunger", "floating", "rebound", "penelope", "Narnia", "time travel", "Civility", "pots & pans", "sapphire"]
}

let savedBucket = {}
;(function () {

  const saved = () => {
    savedBucket = JSON.parse(window.localStorage.getItem("savedBucket"))
    console.log(savedBucket)
    
    return("Saved Bucket is Loaded")
  }
  
 console.log((window.localStorage.getItem("savedBucket")) ? saved() : "no saved bucket") 


})()
const saveBucket = () => {
  console.log("saving bucket")
  window.localStorage.setItem('savedBucket', JSON.stringify(bucket))
  return((window.localStorage.getItem("savedBucket")) ? "bucket saved" : "no bucket saved for some reason")
}
const clearBucket = () => {
  bucket = {
    "name" : [],
    "genre" : [],
    "singer" : [],
    "tempo" : [],
    "randomBeat" : [],
    "goals" : [],
    "keyword" : [],
    "randomBeat" : [1,2,3,4,5,6,7,8]
  }
  populateList()
  console.log("List Cleared")
}
const loadBucket = () => {
  bucket = savedBucket

  $genreInput.value = ''
  $singerInput.value = ''
  $tempoInput.value = ''
  $goalsInput.value = ''
  $keywordInput.value = ''
  $beatInput.value = ''

  populateList()

}
const populateList = () => {
  renderList(bucket["genre"], $genreList)
  renderList(bucket["singer"], $singerList)
  renderList(bucket["tempo"], $tempoList)
  renderList(bucket["goals"], $goalsList)
  renderList(bucket["keyword"], $keywordList)

}
const renderList = (categoryArray, categoryList) => {

  categoryList.innerHTML = ''
  if (categoryArray.length == 0) categoryList.innerHTML += `<li>Empty. Add to your list!</li>`
  for (let i = 0; i < categoryArray.length; i++){
    categoryList.innerHTML += `<li>${categoryArray[i] || "empty"}</li>`

  }
  
}
const randomize = () => {
  const randomIndex = (source) => {
  if (source.length == 0) return "List empty. Submit -->"
  return (source[Math.floor(Math.random() * source.length)])

  }

  $genreInput.value = randomIndex(bucket["genre"])
  $singerInput.value = randomIndex(bucket["singer"])
  $tempoInput.value = randomIndex(bucket["tempo"])
  $goalsInput.value = randomIndex(bucket["goals"])
  $keywordInput.value = randomIndex(bucket["keyword"])
  $beatInput.value = randomIndex(bucket["randomBeat"])
  
  
  return("randomizing...")
  
}
const submitIt = (category) => {
  
  switch (category) {
    case "genre":
      if ($genreInput.value !== ""){
     (confirm(`do you want to add ${$genreInput.value} to your list?`)) ? bucket["genre"][bucket["genre"].length] = $genreInput.value : console.log("nvm")}
     renderList(bucket["genre"], $genreList)
      break
    case "singer":
      if ($singerInput.value !== "") {
      (confirm(`do you want to add ${$singerInput.value} to your list?`)) ? bucket["singer"][bucket["singer"].length] = $singerInput.value : console.log("nvm")}
      renderList(bucket["singer"], $singerList)
      break
    case "tempo":
      if ($tempoInput.value !== "") {
      (confirm(`do you want to add ${$tempoInput.value} to your list?`)) ? bucket["tempo"][bucket["tempo"].length] = $tempoInput.value : console.log("nvm")}
      renderList(bucket["tempo"], $tempoList)
      break
    case "goals":
      if ($goalsInput.value !== "") {
      (confirm(`do you want to add ${$goalsInput.value} to your list?`)) ? bucket["goals"][bucket["goals"].length] = $goalsInput.value : console.log("nvm")}
      renderList(bucket["goals"], $goalsList)
      break
    case "keyword":
      if ($keywordInput.value !== "") {
      (confirm(`do you want to add ${$keywordInput.value} to your list?`)) ? bucket["keyword"][bucket["keyword"].length] = $keywordInput.value : console.log("nvm")}
      renderList(bucket["keyword"], $keywordList)
      break
    default:
      break

  }
}
const showList = () => {
    if ($lists.style.visibility === 'hidden') {
      $lists.style.visibility = 'visible';
      populateList()
    } else {
      $lists.style.visibility = 'hidden';
    }
  }

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
  $lists.style.visibility = "hidden"
  $showList.addEventListener("click", showList)
  let submits = document.getElementsByClassName("inputBtn")
  for (let i = 0; i < submits.length; i++){
    submits[i].addEventListener("click", function(e) {

      let newEntry = e.target.id.replace("Submit", "")
      submitIt(newEntry)
      

    })
  }
  


