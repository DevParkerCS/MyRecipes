const loadMoreButton = document.querySelector(".load-more")
const loadedNews = document.querySelector(".news-hidden")
let newsVisible = false
const showLessText = '<div class="load-more-txt">Show Less Results</div><div class="load-more-btn">&and;</div>'
const showMoreText = '<div class="load-more-txt">Show More Results</div><div class="load-more-btn">&or;</div>'


loadMoreButton.addEventListener("click", () => {
    if (!newsVisible) {
        loadedNews.classList.remove("news-hidden")
        loadMoreButton.innerHTML = showLessText

        newsVisible = true
    }
    else {
        loadedNews.classList.add("news-hidden")
        loadMoreButton.innerHTML = showMoreText
        newsVisible = false
    }
})