document.addEventListener('DOMContentLoaded', function() {
    // Cinema Details Modal
    const detailButtons = document.querySelectorAll('.cinema-details-btn');
    const modal = document.getElementById('cinema-details-modal');
    const closeModal = document.querySelector('.close-modal');

    const cinemaImages = {
        cinema1: 'asset/grandindonesia.jpg',
        cinema2: 'asset/plazeindonesia.png',
        cinema3: 'asset/pondokindahmall.jpg',
        cinema4: 'asset/transstudio.jpg',
    };
    
    if (detailButtons.length > 0 && modal) {
        detailButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const cinemaId = this.getAttribute('data-cinema');
                
                const cinemaData = getCinemaData(cinemaId);
                
                document.getElementById('modal-cinema-main').src = cinemaImages[cinemaId];
                document.getElementById('modal-cinema-title').textContent = cinemaData.name;
                document.getElementById('modal-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${cinemaData.location}`;
                
                const featuresContainer = document.getElementById('modal-features');
                featuresContainer.innerHTML = '';
                cinemaData.features.forEach(feature => {
                    featuresContainer.innerHTML += `<span><i class="${feature.icon}"></i> ${feature.name}</span>`;
                });
                
                document.getElementById('modal-address').textContent = cinemaData.address;
                document.getElementById('modal-info').textContent = cinemaData.info;
                
                const facilitiesContainer = document.getElementById('modal-facilities');
                facilitiesContainer.innerHTML = '';
                cinemaData.facilities.forEach(facility => {
                    facilitiesContainer.innerHTML += `<li>${facility}</li>`;
                });
                
                document.getElementById('modal-hours').textContent = cinemaData.hours;
                document.getElementById('modal-contact').textContent = cinemaData.contact;
                document.getElementById('modal-map-link').href = cinemaData.mapLink;
                
                const galleryThumbs = document.querySelectorAll('.gallery-thumb');
                galleryThumbs.forEach((thumb, index) => {
                    thumb.src = `assets/images/cinema-interior${index + 1}.jpg`;
                    
                    thumb.addEventListener('click', function() {
                        document.getElementById('modal-cinema-main').src = this.src;
                    });
                });
                
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
    }
    
    function getCinemaData(cinemaId) {
        const cinemas = {
            'cinema1': {
                name: 'Sinéfolis Grand Indonesia',
                location: 'Central Jakarta',
                features: [
                    { name: 'IMAX', icon: 'fas fa-film' },
                    { name: 'Gold Class', icon: 'fas fa-couch' },
                    { name: 'Dining', icon: 'fas fa-utensils' }
                ],
                address: 'Grand Indonesia Shopping Town, Jl. M.H. Thamrin No.1, Jakarta 10310',
                info: 'Our flagship location features 12 screens including an IMAX theater and 3 Gold Class auditoriums. Fully renovated in 2022 with the latest sound and projection technology.',
                facilities: [
                    'Parking area',
                    'VIP lounge',
                    'Restaurant and bar',
                    'Private events space',
                    'Accessible facilities',
                    'Mobile ticket scanners'
                ],
                hours: 'Monday - Sunday: 10:00 AM - 12:00 AM',
                contact: 'Phone: +62 21 2358 7000 | Email: grandindo@sinefolis.com',
                mapLink: 'https://maps.google.com'
            },
            'cinema2': {
                name: 'Sinéfolis Plaza Indonesia',
                location: 'Central Jakarta',
                features: [
                    { name: '4DX', icon: 'fas fa-film' },
                    { name: 'Premium', icon: 'fas fa-couch' },
                    { name: 'Dining', icon: 'fas fa-utensils' }
                ],
                address: 'Plaza Indonesia, Jl. M.H. Thamrin No.28-30, Jakarta 10350',
                info: 'Our luxury cinema featuring 8 screens including a 4DX theater. Located in the heart of Jakarta\'s shopping district.',
                facilities: [
                    'Valet parking',
                    'Premium lounge',
                    'Gourmet dining options',
                    'Private screenings',
                    'Accessible facilities',
                    'Digital ticket kiosks'
                ],
                hours: 'Monday - Sunday: 10:00 AM - 11:00 PM',
                contact: 'Phone: +62 21 2992 0000 | Email: plazaid@sinefolis.com',
                mapLink: 'https://maps.google.com'
            },
            'cinema3': {
                name: 'Sinéfolis Pondok Indah Mall',
                location: 'South Jakarta',
                features: [
                    { name: 'IMAX', icon: 'fas fa-film' },
                    { name: 'Gold Class', icon: 'fas fa-couch' },
                    { name: 'Kids Cinema', icon: 'fas fa-baby' }
                ],
                address: 'Pondok Indah Mall 2, Jl. Metro Pondok Indah, Jakarta 12310',
                info: 'Family-friendly cinema with 10 screens including a special Kids Cinema with a play area. Features IMAX and Gold Class experiences.',
                facilities: [
                    'Ample parking',
                    'Kids play area',
                    'Family lounge',
                    'Birthday party packages',
                    'Accessible facilities',
                    'Food court delivery to seats'
                ],
                hours: 'Monday - Sunday: 10:00 AM - 11:00 PM',
                contact: 'Phone: +62 21 7506 750 | Email: pondokindah@sinefolis.com',
                mapLink: 'https://maps.google.com'
            },
            'cinema4': {
                name: 'Sinéfolis Trans Studio Mall',
                location: 'Bandung',
                features: [
                    { name: '4DX', icon: 'fas fa-film' },
                    { name: 'Gold Class', icon: 'fas fa-couch' },
                    { name: 'Kids Cinema', icon: 'fas fa-baby' }
                ],
                address: 'Trans Studio Mall, Jl. Gatot Subroto No.289, Bandung 40273',
                info: 'Modern cinema complex with 10 screens including 4DX technology and a dedicated Kids Cinema for family entertainment.',
                facilities: [
                    'Free parking for moviegoers',
                    'VIP waiting area',
                    'Full service dining',
                    'Birthday packages',
                    'Accessible facilities',
                    'Game zone'
                ],
                hours: 'Monday - Sunday: 10:00 AM - 12:00 AM',
                contact: 'Phone: +62 22 8431 0000 | Email: transstudio@sinefolis.com',
                mapLink: 'https://maps.google.com'
            },
        };
        
        return cinemas[cinemaId] || {
            name: 'Cinema Name',
            location: 'Location',
            features: [],
            address: 'Address not available',
            info: 'Information not available',
            facilities: ['No data available'],
            hours: 'Hours not available',
            contact: 'Contact information not available',
            mapLink: 'https://maps.google.com'
        };
    }
});