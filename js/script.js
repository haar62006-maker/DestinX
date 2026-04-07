// Mock data for offers and travel entities
const offers = [
    {
        id: 1,
        title: 'Paris Getaway',
        destination: 'Paris, France',
        price: 500,
        image: 'images/WhatsApp Image 2026-04-07 at 00.32.35.jpeg',
        description: 'Romantic trip to Paris with museum visits, river cruises, and French cuisine.',
        availability: 'Available',
        duration: '5 days',
        type_voyage: 'City Experience',
        transport: 'Plane',
        hebergement: '4-star hotel'
    },
    {
        id: 2,
        title: 'Tokyo Adventure',
        destination: 'Tokyo, Japan',
        price: 800,
        image: 'images/WhatsApp Image 2026-04-07 at 00.32.34.jpeg',
        description: 'Explore Tokyo with guided tours, cultural events, and city nights.',
        availability: 'Available',
        duration: '7 days',
        type_voyage: 'Adventure',
        transport: 'Plane',
        hebergement: 'Business hotel'
    },
    {
        id: 3,
        title: 'Bali Relaxation',
        destination: 'Bali, Indonesia',
        price: 400,
        image: 'images/WhatsApp Image 2026-04-07 at 00.32.33.jpeg',
        description: 'Relax on Bali beaches with wellness sessions, local food, and island tours.',
        availability: 'Available',
        duration: '6 days',
        type_voyage: 'Relaxation',
        transport: 'Plane',
        hebergement: 'Seaside villa'
    },
    {
        id: 4,
        title: 'New York City Tour',
        destination: 'New York, USA',
        price: 600,
        image: 'images/WhatsApp Image 2026-04-07 at 00.32.36.jpeg',
        description: 'Experience the hustle of NYC with sightseeing, shopping, and nightlife.',
        availability: 'Available',
        duration: '5 days',
        type_voyage: 'City Experience',
        transport: 'Plane',
        hebergement: 'City hotel'
    }
];

function initializeData() {
    if (!localStorage.getItem('users')) {
        const admin = { id_user: 1, fullName: 'Admin', email: 'admin@destinx.com', password: 'admin123', role: 'admin' };
        localStorage.setItem('users', JSON.stringify([admin]));
    }
    if (!localStorage.getItem('reservations')) localStorage.setItem('reservations', JSON.stringify([]));
    if (!localStorage.getItem('payments')) localStorage.setItem('payments', JSON.stringify([]));
    if (!localStorage.getItem('suggestions')) localStorage.setItem('suggestions', JSON.stringify([]));
    if (!localStorage.getItem('avis')) localStorage.setItem('avis', JSON.stringify([]));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function getReservations() {
    return JSON.parse(localStorage.getItem('reservations') || '[]');
}

function saveReservations(reservations) {
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

function getPayments() {
    return JSON.parse(localStorage.getItem('payments') || '[]');
}

function savePayments(payments) {
    localStorage.setItem('payments', JSON.stringify(payments));
}

function getSuggestions() {
    return JSON.parse(localStorage.getItem('suggestions') || '[]');
}

function saveSuggestions(suggestions) {
    localStorage.setItem('suggestions', JSON.stringify(suggestions));
}

function getAvis() {
    return JSON.parse(localStorage.getItem('avis') || '[]');
}

function saveAvis(avis) {
    localStorage.setItem('avis', JSON.stringify(avis));
}

function generateId(prefix) {
    return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function showLoading(button) {
    button.disabled = true;
    button.innerHTML = '<div class="loading"></div>Processing...';
}

function hideLoading(button, originalText) {
    button.disabled = false;
    button.innerHTML = originalText;
}

function loadOffers() {
    const offersList = document.getElementById('offers-list');
    if (!offersList) return;
    offersList.innerHTML = '';
    offers.forEach((offer, index) => {
        setTimeout(() => {
            const card = document.createElement('div');
            card.className = 'offer-card';
            card.innerHTML = `
                <img src="${offer.image}" alt="${offer.title}" />
                <div class="offer-card-content">
                    <h3>${offer.title}</h3>
                    <p>${offer.destination} · ${offer.duration}</p>
                    <p class="travel-price">$${offer.price}</p>
                    <div class="offer-card-footer">
                        <button class="btn btn-secondary" onclick="viewOffer(${offer.id})">Voir les détails</button>
                    </div>
                </div>
            `;
            offersList.appendChild(card);
        }, index * 100);
    });
}

function searchOffers() {
    const destination = document.getElementById('destination')?.value.toLowerCase() || '';
    const filtered = offers.filter(offer => offer.title.toLowerCase().includes(destination) || offer.destination.toLowerCase().includes(destination));
    const offersList = document.getElementById('offers-list');
    if (!offersList) return;
    offersList.innerHTML = '';
    filtered.forEach((offer, index) => {
        setTimeout(() => {
            const card = document.createElement('div');
            card.className = 'offer-card';
            card.innerHTML = `
                <img src="${offer.image}" alt="${offer.title}" />
                <div class="offer-card-content">
                    <h3>${offer.title}</h3>
                    <p>${offer.destination} · ${offer.duration}</p>
                    <p class="travel-price">$${offer.price}</p>
                    <div class="offer-card-footer">
                        <button class="btn btn-secondary" onclick="viewOffer(${offer.id})">Voir les détails</button>
                    </div>
                </div>
            `;
            offersList.appendChild(card);
        }, index * 100);
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function loadProfilePage() {
    const profileInfo = document.getElementById('profile-info');
    if (!profileInfo) return;
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    profileInfo.innerHTML = `
        <div class="profile-card">
            <p><strong>Full Name</strong><span>${user.fullName}</span></p>
            <p><strong>Email</strong><span>${user.email}</span></p>
            <p><strong>Account</strong><span>${user.role === 'admin' ? 'Admin' : 'Traveler'}</span></p>
        </div>
        <div class="profile-buttons">
            <a href="index.html" class="btn btn-outline">Back to Home</a>
            <a href="home.html" class="btn btn-primary">Explore DestinX</a>
        </div>
    `;
}

function viewOffer(id) {
    const offer = offers.find(o => o.id === id);
    localStorage.setItem('selectedOffer', JSON.stringify(offer));
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'offer-details.html';
    }, 300);
}

function loadOfferDetails() {
    const offer = JSON.parse(localStorage.getItem('selectedOffer'));
    const details = document.getElementById('offer-details');
    if (!offer || !details) return;
    setTimeout(() => {
        details.innerHTML = `
            <img src="${offer.image}" alt="${offer.title}" class="w3-image w3-margin-bottom">
            <h2>${offer.title}</h2>
            <p>${offer.description}</p>
            <p><strong>Destination:</strong> ${offer.destination}</p>
            <p><strong>Type:</strong> ${offer.type_voyage} · <strong>Durée:</strong> ${offer.duration}</p>
            <p><strong>Transport:</strong> ${offer.transport} · <strong>Hébergement:</strong> ${offer.hebergement}</p>
            <p><strong>Prix:</strong> $${offer.price}</p>
            <p><strong>Disponibilité:</strong> ${offer.availability}</p>
        `;
        loadOfferReviews();
    }, 200);
}

function bookNow() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        localStorage.setItem('afterLogin', 'offer-details.html');
        window.location.href = 'login.html';
        return;
    }
    const offer = JSON.parse(localStorage.getItem('selectedOffer'));
    if (!offer) return;

    const reservation = {
        id_reserve: generateId('RES'),
        date_reservation: new Date().toISOString(),
        id_user: currentUser.id_user,
        id_voyage: offer.id,
        statut: 'pending_payment',
        price: offer.price,
        title: offer.title,
        destination: offer.destination
    };
    const reservations = getReservations();
    reservations.push(reservation);
    saveReservations(reservations);
    localStorage.setItem('selectedReservation', JSON.stringify(reservation));

    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'booking.html';
    }, 300);
}

function loadBookingSummary() {
    const reservation = JSON.parse(localStorage.getItem('selectedReservation'));
    const summary = document.getElementById('booking-summary');
    if (!reservation || !summary) return;
    setTimeout(() => {
        summary.innerHTML = `
            <h3>Résumé de la réservation</h3>
            <p>Destination: ${reservation.destination}</p>
            <p>Voyage: ${reservation.title}</p>
            <p>Prix: $${reservation.price}</p>
            <p>Status: ${reservation.statut.replace('_', ' ')}</p>
        `;
    }, 300);
}

function loadPaymentSummary() {
    const reservation = JSON.parse(localStorage.getItem('selectedReservation'));
    const summary = document.getElementById('payment-summary');
    if (!reservation || !summary) return;
    setTimeout(() => {
        summary.innerHTML = `
            <h3>Résumé du paiement</h3>
            <p>Destination: ${reservation.destination}</p>
            <p>Montant total: $${reservation.price}</p>
        `;
    }, 300);
}

function loadConfirmation() {
    const reservation = JSON.parse(localStorage.getItem('selectedReservation'));
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
    const bookingId = localStorage.getItem('bookingId');
    const details = document.getElementById('confirmation-details');
    if (!reservation || !bookingInfo || !details) return;
    setTimeout(() => {
        details.innerHTML = `
            <p>Nom: ${bookingInfo.name}</p>
            <p>Téléphone: ${bookingInfo.phone}</p>
            <p>Destination: ${reservation.destination}</p>
            <p>Prix: $${reservation.price}</p>
        `;
        document.getElementById('booking-id').textContent = bookingId;
    }, 500);
}

function submitReview() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    const offer = JSON.parse(localStorage.getItem('selectedOffer'));
    const note = Number(document.getElementById('review-rating')?.value);
    const commentaire = document.getElementById('review-comment')?.value.trim();
    if (!offer || !note || !commentaire) {
        alert('Veuillez sélectionner une note et écrire un commentaire.');
        return;
    }
    const avis = {
        id_avis: generateId('AV'),
        id_user: currentUser.id_user,
        id_voyage: offer.id,
        note,
        commentaire,
        date_avis: new Date().toISOString()
    };
    const avisList = getAvis();
    avisList.push(avis);
    saveAvis(avisList);
    document.getElementById('review-success').style.display = 'block';
    setTimeout(() => {
        document.getElementById('review-success').style.display = 'none';
    }, 3000);
    loadOfferReviews();
}

function loadOfferReviews() {
    const offer = JSON.parse(localStorage.getItem('selectedOffer'));
    const container = document.getElementById('offer-reviews');
    if (!container) return;
    if (!offer) {
        container.innerHTML = '<p>Aucun avis disponible.</p>';
        return;
    }
    const reviews = getAvis().filter(a => a.id_voyage === offer.id);
    container.innerHTML = reviews.length ? reviews.map(review => `
        <div class="w3-panel w3-light-grey w3-padding">
            <p><strong>Note:</strong> ${review.note} / 5</p>
            <p>${review.commentaire}</p>
            <p class="w3-small w3-text-grey">Le ${new Date(review.date_avis).toLocaleDateString()}</p>
        </div>
    `).join('') : '<p>Aucun avis pour le moment.</p>';
}

function loadReservations() {
    const list = document.getElementById('reservations-list');
    const user = getCurrentUser();
    if (!list) return;
    if (!user) {
        list.innerHTML = '<div class="w3-panel w3-pale-yellow">Vous devez vous connecter pour voir vos réservations.</div>';
        return;
    }
    const reservations = getReservations().filter(r => r.id_user === user.id_user);
    if (!reservations.length) {
        list.innerHTML = '<div class="w3-panel w3-pale-yellow">Vous n\'avez pas encore de réservations.</div>';
        return;
    }
    list.innerHTML = reservations.map(reservation => `
        <div class="w3-col l6 m12 w3-margin-bottom">
            <div class="w3-card w3-white w3-padding">
                <h4>${reservation.title}</h4>
                <p>${reservation.destination}</p>
                <p>Prix: $${reservation.price}</p>
                <p>Status: <span class="status-pill ${reservation.statut}">${reservation.statut.replace('_', ' ')}</span></p>
                <p>Date: ${new Date(reservation.date_reservation).toLocaleDateString()}</p>
                ${reservation.statut === 'confirmed' ? `<button class="w3-button w3-red" onclick="cancelReservation('${reservation.id_reserve}')">Annuler la réservation</button>` : ''}
            </div>
        </div>
    `).join('');
}

function cancelReservation(id) {
    const reservations = getReservations();
    const reservation = reservations.find(r => r.id_reserve === id);
    if (!reservation) return;
    reservation.statut = 'cancelled';
    saveReservations(reservations);
    loadReservations();
    alert('La réservation a été annulée.');
}

function loadAdminDashboard() {
    const user = getCurrentUser();
    const adminWelcome = document.getElementById('admin-welcome');
    const suggestionsList = document.getElementById('suggestions-admin-list');
    const reservationsList = document.getElementById('reservations-admin-list');
    if (!adminWelcome || !suggestionsList || !reservationsList) return;
    if (!user || user.role !== 'admin') {
        adminWelcome.innerHTML = '<strong>Accès administrateur requis.</strong>';
        return;
    }
    adminWelcome.innerHTML = `<p>Bienvenue, ${user.fullName}. Vous pouvez consulter les suggestions et les réservations.</p>`;

    const suggestions = getSuggestions();
    suggestionsList.innerHTML = suggestions.length ? suggestions.map(suggestion => `
        <div class="w3-card w3-white w3-margin-bottom w3-padding">
            <p><strong>Suggestion</strong></p>
            <p>${suggestion.texte}</p>
            <p class="w3-small w3-text-grey">Par utilisateur #${suggestion.id_user}</p>
        </div>
    `).join('') : '<div class="w3-panel w3-pale-blue">Aucune suggestion pour le moment.</div>';

    const reservations = getReservations();
    reservationsList.innerHTML = reservations.length ? reservations.map(reservation => `
        <div class="w3-card w3-white w3-margin-bottom w3-padding">
            <p><strong>${reservation.title}</strong> (${reservation.destination})</p>
            <p>ID Réservation: ${reservation.id_reserve}</p>
            <p>Utilisateur: #${reservation.id_user}</p>
            <p>Status: ${reservation.statut}</p>
        </div>
    `).join('') : '<div class="w3-panel w3-pale-blue">Aucune réservation enregistrée.</div>';
}

function submitSuggestion() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    const suggestionText = document.getElementById('suggestion-text')?.value.trim();
    if (!suggestionText) {
        alert('Veuillez saisir une suggestion.');
        return;
    }
    const suggestion = {
        id_suggestion: generateId('SUG'),
        id_user: user.id_user,
        texte: suggestionText,
        statut: 'new'
    };
    const suggestions = getSuggestions();
    suggestions.push(suggestion);
    saveSuggestions(suggestions);
    document.getElementById('suggestion-form').reset();
    document.getElementById('suggestion-success').style.display = 'block';
    setTimeout(() => {
        document.getElementById('suggestion-success').style.display = 'none';
    }, 3000);
}

function loadAfterLoginRedirect() {
    const target = localStorage.getItem('afterLogin');
    if (target) {
        localStorage.removeItem('afterLogin');
        window.location.href = target;
    }
}

document.getElementById('booking-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    showLoading(button);

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const reservation = JSON.parse(localStorage.getItem('selectedReservation'));
    if (reservation) {
        reservation.name = name;
        reservation.phone = phone;
        saveReservations(getReservations().map(r => r.id_reserve === reservation.id_reserve ? reservation : r));
        localStorage.setItem('selectedReservation', JSON.stringify(reservation));
    }

    setTimeout(() => {
        localStorage.setItem('bookingInfo', JSON.stringify({ name, phone }));
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'payment.html';
        }, 300);
    }, 1500);
});

document.getElementById('payment-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    showLoading(button);

    setTimeout(() => {
        const reservation = JSON.parse(localStorage.getItem('selectedReservation'));
        if (reservation) {
            const payment = {
                id_paiement: generateId('PAY'),
                id_reservation: reservation.id_reserve,
                montant: reservation.price,
                mode_paiement: document.getElementById('payment-method')?.value || 'unknown'
            };
            const payments = getPayments();
            payments.push(payment);
            savePayments(payments);

            const reservations = getReservations();
            const updated = reservations.map(r => r.id_reserve === reservation.id_reserve ? { ...r, statut: 'confirmed' } : r);
            saveReservations(updated);
            localStorage.setItem('selectedReservation', JSON.stringify({ ...reservation, statut: 'confirmed' }));
            localStorage.setItem('bookingId', generateId('BK'));
        }
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'confirmation.html';
        }, 300);
    }, 2000);
});

document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    showLoading(button);

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = getUsers();
    if (users.find(u => u.email === email)) {
        hideLoading(button, originalText);
        alert('Cette adresse e-mail est déjà utilisée.');
        return;
    }
    const newUser = { id_user: users.length + 1, fullName, email, password, role: 'user' };
    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);

    setTimeout(() => {
        hideLoading(button, originalText);
        alert('Compte créé avec succès !');
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 300);
    }, 1500);
});

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    showLoading(button);

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = getUsers().find(user => user.email === email && user.password === password);

    setTimeout(() => {
        if (user) {
            hideLoading(button, originalText);
            setCurrentUser(user);
            document.body.style.opacity = '0';
            setTimeout(() => {
                const target = localStorage.getItem('afterLogin');
                if (target) {
                    localStorage.removeItem('afterLogin');
                    window.location.href = target;
                } else {
                    window.location.href = user.role === 'admin' ? 'admin.html' : 'profile.html';
                }
            }, 300);
        } else {
            hideLoading(button, originalText);
            document.getElementById('error-message').style.display = 'block';
            const form = document.getElementById('login-form');
            form.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                form.style.animation = '';
            }, 500);
        }
    }, 1000);
});

function setupSuggestionForm() {
    const form = document.getElementById('suggestion-form');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitSuggestion();
    });
}

function loadReservationsPage() {
    loadReservations();
}

function loadAdminPage() {
    loadAdminDashboard();
}

document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        loadOffers();
        loadOfferDetails();
        loadBookingSummary();
        loadPaymentSummary();
        loadConfirmation();
        loadOfferReviews();
        loadReservations();
        setupSuggestionForm();
        loadProfilePage();
        loadAdminDashboard();
    }, 100);
});