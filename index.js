




function movieBtn(){
    const movieInput = document.getElementById("movie-input")
    let movieOutput = document.getElementById("movie-output")

    document.getElementById("movie-button").addEventListener("click", function(){
        movieOutput.textContent = `https://vidsrc.me/embed/${movieInput.value}`
        movieOutput.href = `https://vidsrc.me/embed/${movieInput.value}`
        
    })

}

function tvBtn(){
    const tvTtInput = document.getElementById("tv-tt-input")
    const tvSeason = document.getElementById("tv-season")
    const tvEpisode = document.getElementById("tv-episode")
    let tvOutput = document.getElementById("tv-output")

    document.getElementById("tv-button").addEventListener("click", function(){
        tvOutput.textContent = `https://vidsrc.me/embed/${tvTtInput.value}/${tvSeason.value}-${tvEpisode.value}/`
        tvOutput.href = `https://vidsrc.me/embed/${tvTtInput.value}/${tvSeason.value}-${tvEpisode.value}/`
    })

}



movieBtn()
tvBtn()