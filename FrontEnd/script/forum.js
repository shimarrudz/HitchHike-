console.log(threads);
var container = document.querySelector('ol');
for (let thread of threads) {
    var html = `
    <li class="row">
        <a href="./threadForum.html?${thread.id}">
            <h4 class="title">
                ${thread.title}
            </h4>
            <div class="bottom">
                <p class="timestamp">
                    ${new Date(thread.date).toLocaleString()}
                </p>
                <p class="comment-count">
                    ${thread.comments.length} comentários
                </p>
            </div>
        </a>
    </li>
    `
    container.insertAdjacentHTML('beforeend', html);
}