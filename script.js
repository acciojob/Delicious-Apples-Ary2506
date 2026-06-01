//your code here
/* ════════════════════════════════════════════
   Apple Product Card — script.js
════════════════════════════════════════════ */

/**
 * selectVariant(li)
 * Called when a color variant is clicked.
 * Updates: main image, green background colour,
 *          and all 4 album thumbnails.
 */
function selectVariant(li) {
    // Remove active from all variants
    document.querySelectorAll('.variant li').forEach(el => el.classList.remove('active'));
    li.classList.add('active');

    const src = li.dataset.src;
    const bg  = li.dataset.bg;

    // Update main display image
    document.getElementById('mainImage').src = src;

    // Update photo background colour
    document.querySelector('.photo-main').style.backgroundColor = bg;

    // Update ALL album thumbnails to the selected apple
    document.querySelectorAll('.photo-album li').forEach((albumLi, i) => {
        albumLi.querySelector('img').src = src;
        albumLi.classList.toggle('active', i === 0);
    });
}

/**
 * selectThumb(li)
 * Called when a thumbnail in the album is clicked.
 * Updates the main display image only.
 */
function selectThumb(li) {
    document.querySelectorAll('.photo-album li').forEach(el => el.classList.remove('active'));
    li.classList.add('active');
    document.getElementById('mainImage').src = li.querySelector('img').src;
}

/**
 * toggleHeart(el)
 * Toggles the wishlist heart icon between
 * outline (not saved) and filled (saved).
 */
function toggleHeart(el) {
    el.classList.toggle('loved');
}
