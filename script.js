// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibHVsYXlhbmciLCJhIjoiY21oZHAzMTYwMDVkZjJ2cHZyaHh6N3E5ayJ9.1DHnr-Iov8QBokd0I6pYTA';

// Initialize map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-night-v1',
  center: [-98.5795, 39.8283],
  zoom: 3.5
});

// Dark sky locations
const locations = [
  {
    name: 'Sedona, Arizona',
    coordinates: [-111.7603, 34.8697],
    designated: '2014',
    category: 'Dark Sky Community',
    description: 'Famous for its red rock scenery, Sedona was designated as a Dark Sky Community in 2014, committed to preserving the night sky for residents and visitors alike.',
    image: 'https://drive.google.com/thumbnail?id=1_L8EBNi0jBec2G5Z0DS8OzJBM-3B5iDe&sz=w400'
  },
  {
    name: 'Flagstaff, Arizona',
    coordinates: [-111.6513, 35.1983],
    designated: '2001',
    category: 'Dark Sky Community',
    description: 'The world\'s first International Dark Sky City, home to Lowell Observatory. Flagstaff has maintained strict lighting ordinances for decades.',
    image: 'https://drive.google.com/thumbnail?id=13IZNJ2eygoqpt5ps_avaGQnHu86yZ9xo&sz=w400'
  },
  {
    name: 'Beverly Shores, Indiana',
    coordinates: [-86.9956, 41.6931],
    designated: '2021',
    category: 'Dark Sky Community',
    description: 'Nestled within Indiana Dunes National Park on the southern shore of Lake Michigan, Beverly Shores preserves dark skies near the greater Chicago metropolitan area.',
    image: 'https://drive.google.com/thumbnail?id=1INSwI5YF0zHDCTXHYuq11HEtglKUHExG&sz=w400'
  },
  {
    name: 'Old Snowmass, Colorado',
    coordinates: [-107.0117, 39.2319],
    designated: '2023',
    category: 'Dark Sky Community',
    description: 'A rural community in the Roaring Fork Valley surrounded by the Elk Mountains, committed to responsible outdoor lighting and spectacular Milky Way views.',
    image: 'https://darksky.org/app/uploads/2026/02/17.jpg'
  }
];

// Add markers and popups
locations.forEach(location => {

  // Custom marker
  const el = document.createElement('div');
  el.style.cssText = `
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #5c6bc0;
    border: 3px solid white;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(92,107,192,0.8);
  `;

  // Popup HTML
  const html = `
    <img class="popup-image" src="${location.image}" alt="${location.name}">
    <div class="popup-body">
      <h3>${location.name}</h3>
      <p>${location.description}</p>
      <p><strong>Designated:</strong> ${location.designated}</p>
      <p><strong>Category:</strong> ${location.category}</p>
      <p class="tag">★ International Dark Sky Place</p>
    </div>
  `;

  new mapboxgl.Marker(el)
    .setLngLat(location.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 15, maxWidth: '260px' }).setHTML(html))
    .addTo(map);
});

// Navigation controls
map.addControl(new mapboxgl.NavigationControl(), 'top-right');
