    function search() {
            const input = document.getElementById('myInput');
            const filter = input.value.toLowerCase();
            const artistDivs = document.querySelectorAll('.artists');

            artistDivs.forEach(function(artist) {
                const artistName = artist.getAttribute('data-artist').toLowerCase();
                if (artistName.includes(filter)) {
                    artist.style.display = '';  
                } else {
                    artist.style.display = 'none';  
                }
            });
        }