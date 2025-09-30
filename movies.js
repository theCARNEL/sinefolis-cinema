document.addEventListener('DOMContentLoaded', function() { 
    // Movie Details Modal
    const detailButtons = document.querySelectorAll('.movie-details-btn');
    const modal = document.getElementById('movie-details-modal');
    const closeModal = document.querySelector('.close-modal');

    document.querySelectorAll('.movie-details-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const movieId = this.dataset.movie;
            showMovieDetails(movieId);
        });
    });

    const movieImages = {
        movie1: 'asset/minecraftmovie.jpeg',
        movie2: 'asset/novocaine.png',
        movie3: 'asset/pabrikgula.jpg',
        movie4: 'asset/paddington.jpg',
        movie5: 'asset/captainamerica.jpg',
        movie6: 'asset/mickey17.png',
        movie7: 'asset/snowwhite.jpeg',
        movie8: 'asset/blackbag.jpg',
    };

    if (detailButtons.length > 0 && modal) {
        detailButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const movieId = this.getAttribute('data-movie');
                
                const movieData = getMovieData(movieId);
                
                document.getElementById('modal-poster').src = movieImages[movieId];
                document.getElementById('modal-title').textContent = movieData.title;
                document.getElementById('modal-genre').textContent = movieData.genre;
                document.getElementById('modal-duration').innerHTML = `<i class="far fa-clock"></i> ${movieData.duration}`;
                document.getElementById('modal-rating').innerHTML = `<i class="fas fa-star"></i> ${movieData.rating}`;
                document.getElementById('modal-release').innerHTML = `<i class="far fa-calendar-alt"></i> ${movieData.releaseDate}`;
                document.getElementById('modal-rated').innerHTML = `<i class="fas fa-certificate"></i> ${movieData.rated}`;
                document.getElementById('modal-cast').textContent = movieData.cast;
                document.getElementById('modal-plot').textContent = movieData.plot;
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        const dateBtns = document.querySelectorAll('.date-btn');
        const timeBtns = document.querySelectorAll('.time-btn');
        
        dateBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                dateBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        timeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                timeBtns.forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    }
    
    function getMovieData(movieId) {
        const movies = {
            'movie1': {
                title: 'A Minecraft Movie',
                genre: 'Adventure | Comedy',
                duration: '1h 41m',
                rating: '5.7',
                releaseDate: 'April 15, 2025',
                rated: '13+',
                cast: 'Jason Momoa, Jack Black, Sebastian Hansen, Emma Myers',
                plot: "Four misfits are suddenly pulled through a mysterious portal into a bizarre cubic wonderland that thrives on imagination. To get back home they'll have to master this world while embarking on a quest with an unexpected expert crafter."
            },
            'movie2': {
                title: 'Novocaine',
                genre: 'Action | Comedy',
                duration: '1h 50m',
                rating: '6.5',
                releaseDate: 'March 13, 2025',
                rated: '17+',
                cast: 'Jack Quaid, Amber Midthunder, Ray Nicholson',
                plot: 'When the girl of his dreams is kidnapped, a man incapable of feeling physical pain turns his rare condition into an unexpected advantage in the fight to rescue her.'
            },
            'movie3': {
                title: 'Pabrik Gula',
                genre: 'Horror',
                duration: '2h 13m',
                rating: '8.8',
                releaseDate: 'March 31, 2025',
                rated: '21+',
                cast: 'Arbani Yasiz, Ersya Aurelia, Erika Carlina',
                plot: 'A group of seasonal laborers who come to an old sugar factory in the countryside to work during the harvest season.'
            },
            'movie4': {
                title: 'Paddington in Peru',
                genre: 'Comedy | Family',
                duration: '1h 45m',
                rating: '6.9',
                releaseDate: 'November 8, 2024',
                rated: 'G',
                cast: 'Hugh Bonneville, Emily Mortimer, Ben Whishaw',
                plot: 'Paddington returns to Peru to visit his beloved Aunt Lucy, who now resides at the Home for Retired Bears. With the Brown family in tow, a thrilling adventure ensues when a mystery plunges them into an unexpected journey.'
            },
            'movie5': {
                title: 'Captain America: Brave New Worldr',
                genre: 'Action | Sci-fy',
                duration: '1h 58m',
                rating: '6.0',
                releaseDate: 'February 12, 2025',
                rated: '13+',
                cast: 'Anthony Mackie, Harrison Ford, Danny Ramirez',
                plot: 'Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.'
            },
            'movie6': {
                title: 'Mickey 17',
                genre: 'Sci-Fi | Adventure',
                duration: '2h 17m',
                rating: '7.1',
                releaseDate: 'March 3, 2025',
                rated: '17+',
                cast: 'Robert Pattinson, Steven Yeun, Michael Monroe',
                plot: 'During a human expedition to colonize space, Mickey 17, a so-called "expendable" employee, is sent to explore an ice planet.'
            },
            'movie7': {
                title: 'Snow White',
                genre: 'Family | Fantasy',
                duration: '1h 49m',
                rating: '2.1',
                releaseDate: 'March 21, 2025',
                rated: '13+',
                cast: 'Rachel Zegler. Emilia Faucher, Gal Gadot',
                plot: 'A princess joins forces with seven dwarfs and a group of rebels to liberate her kingdom from her cruel stepmother the Evil Queen.'
            },
            'movie8': {
                title: 'Black Bag',
                genre: 'Spy | Drama',
                duration: '1h 33m',
                rating: '7.2',
                releaseDate: 'March 14, 2025',
                rated: 'R',
                cast: 'Michael Fassbender, Gustaf Skarsgård, Cate Blanchett',
                plot: 'When intelligence agent Kathryn Woodhouse is suspected of betraying the nation, her husband - also a legendary agent - faces the ultimate test of whether to be loyal to his marriage, or his country.'
            }
        };
        
        return movies[movieId] || {
            title: 'Movie Title',
            genre: 'Genre',
            duration: 'Duration',
            rating: 'Rating',
            releaseDate: 'Release Date',
            cast: 'Cast information not available',
            plot: 'Plot information not available'
        };
    }
});