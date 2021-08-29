const audio = document.createElement('audio')
      audio.src="./Sources/Tones_and_I_Dance_Monkey.mp3"

//Controlar los elementos HTML
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const cover = document.getElementById("cover")
const label = document.getElementById("label")
const progress = document.getElementById("progress")

//eventos de audio
play.addEventListener("click", ()=> {
   audio.play()
   progress.max = audio.duration
})

pause.addEventListener("click", ()=> {
   audio.pause()
})

audio.addEventListener("playing", ()=> {
   cover.src = "cover/tones_and_I.jpg"
   label.textContent = "Reproduciendo 'Tones and I - Dance Monkey'"
})

audio.addEventListener("pause", ()=> {
   cover.src = "cover/blank.png"
   label.textContent = "Reproducción pausada..."
})

audio.addEventListener("timeupdate", ()=> {
   progress.value = audio.currentTime
})

navigator.mediaSession.metadata = new MediaMetadata({
   title: 'Tones and I',
   artist: 'Dance Monkey',
   album: 'Dance Monkey',
   artwork: [
     {
       src: 'cover/tones_and_I.jpg',
       sizes: '640x640',
       type: 'image/jpg'
     }
   ]
 })