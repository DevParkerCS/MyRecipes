const loadMoreButton = document.querySelector(".load-more")
const loadedNews = document.querySelectorAll(".news-hidden")
let newsVisible = false
const showLessText = '<div class="load-more-txt">Show Less Results</div><div class="load-more-btn">&and;</div>'
const showMoreText = '<div class="load-more-txt">Show More Results</div><div class="load-more-btn">&or;</div>'


loadMoreButton.addEventListener("click", () => {
    loadedNews.forEach(news => {
        if (!newsVisible) {
            news.classList.remove("news-hidden")
            loadMoreButton.innerHTML = showLessText
        }
        else {
            news.classList.add("news-hidden")
            loadMoreButton.innerHTML = showMoreText
        }
    })

    if (!newsVisible) {
        newsVisible = true
    }
    else { newsVisible = false }
})