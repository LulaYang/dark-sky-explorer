// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibHVsYXlhbmciLCJhIjoiY21oZHAzMTYwMDVkZjJ2cHZyaHh6N3E5ayJ9.1DHnr-Iov8QBokd0I6pYTA';

// Initialize the map centered on the US
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-night-v1',
  center: [-98.5795, 39.8283],
  zoom: 3.5
});

// Dark sky locations data
const locations = [
  {
    name: 'Sedona, Arizona',
    coordinates: [-111.7603, 34.8697],
    designated: '2014',
    category: 'Dark Sky Community',
    area: '49.7 km²',
    description: 'Famous for its red rock scenery, Sedona was designated as a Dark Sky Community in 2014, committed to preserving the night sky for residents and visitors alike.'
  },
  {
    name: 'Flagstaff, Arizona',
    coordinates: [-111.6513, 35.1983],
    designated: '2001',
    category: 'Dark Sky Community',
    area: '64.7 km²',
    description: 'The world\'s first International Dark Sky City, home to Lowell Observatory. Flagstaff has maintained strict lighting ordinances for decades to protect the night sky.'
  },
  {
    name: 'Beverly Shores, Indiana',
    coordinates: [-86.9956, 41.6931],
    designated: '2021',
    category: 'Dark Sky Community',
    area: '8.4 km²',
    description: 'Nestled within Indiana Dunes National Park on the southern shore of Lake Michigan, Beverly Shores preserves dark skies near the greater Chicago metropolitan area.'
  },
  {
    name: 'Old Snowmass, Colorado',
    coordinates: [-107.0117, 39.2319],
    designated: '2023',
    category: 'Dark Sky Community',
    area: 'N/A',
    description: 'A rural community in the Roaring Fork Valley surrounded by the Elk Mountains, committed to responsible outdoor lighting and spectacular Milky Way views.'
  }
];

// Add markers and popups for each location
locations.forEach(location => {

  // Create a custom marker element
  const el = document.createElement('div');
  el.style.width = '20px';
  el.style.height = '20px';
  el.style.borderRadius = '50%';
  el.style.backgroundColor = '#5c6bc0';
  el.style.border = '3px solid white';
  el.style.cursor = 'pointer';
  el.style.boxShadow = '0 0 10px rgba(92, 107, 192, 0.8)';

  // Create popup content
  const popupContent = `
    <h3>${location.name}</h3>
    <p>${location.description}</p>
    <p><strong>Designated:</strong> ${location.designated}</p>
    <p><strong>Category:</strong> ${location.category}</p>
    <p class="tag">★ International Dark Sky Place</p>
  `;

  // Add marker and popup to map
  new mapboxgl.Marker(el)
    .setLngLat(location.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(popupContent)
    )
    .addTo(map);
});

// Add navigation controls
map.addControl(new mapboxgl.NavigationControl(), 'top-right');
