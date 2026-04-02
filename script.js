// Store each scene's image URL, caption, and about text
const scenes = {
  scene1: {
    image: "https://drive.google.com/thumbnail?id=1_L8EBNi0jBec2G5Z0DS8OzJBM-3B5iDe&sz=w2000",
    caption: "Sedona, Arizona",
    title: "Sedona, Arizona",
    designated: "2014",
    category: "Dark Sky Community",
    area: "49.7 km²",
    description: "The red rock scenery of Sedona has long been an iconic setting for Hollywood films about the American Old West. With its IDA designation, the city highlights its commitment to dark skies preservation as a draw for new residents and businesses."
  },
  scene2: {
    image: "https://drive.google.com/thumbnail?id=13IZNJ2eygoqpt5ps_avaGQnHu86yZ9xo&sz=w2000",
    caption: "Flagstaff, Arizona",
    title: "Flagstaff, Arizona",
    designated: "2001",
    category: "Dark Sky Community",
    area: "171 km²",
    description: "Flagstaff was the world’s first International Dark Sky City, designated in 2001. Home to Lowell Observatory, the city has enforced strict lighting ordinances for decades to protect the night sky for astronomers and the public alike."
  },
  scene3: {
    image: "https://drive.google.com/thumbnail?id=1INSwI5YF0zHDCTXHYuq11HEtglKUHExG&sz=w2000",
    caption: "Beverly Shores, Indiana",
    title: "Beverly Shores, Indiana",
    designated: "2014",
    category: "Dark Sky Community",
    area: "15.1 km²",
    description: "Nestled within Indiana Dunes National Park on the southern shore of Lake Michigan, Beverly Shores is a small lakeside community committed to preserving dark skies amid the greater Chicago metropolitan area."
  },
  scene4: {
    image: "https://darksky.org/app/uploads/2026/02/17.jpg",
    caption: "Old Snowmass, Colorado",
    title: "Old Snowmass, Colorado",
    designated: "2026",
    category: "Dark Sky Community",
    area: "2.6 km²",
    description: "Old Snowmass is a rural community in the Roaring Fork Valley of Colorado, surrounded by the Elk Mountains. Its commitment to responsible outdoor lighting helps preserve spectacular views of the Milky Way for residents and visitors."
  }
};

// Switch the displayed sky image, caption, and info panel based on which button was clicked
window.showScene = function(sceneKey) {
  const scene = scenes[sceneKey];

  // Update image and caption
  document.getElementById("skyImage").src = scene.image;
  document.getElementById("caption").textContent = scene.caption;

  // Update info panel content
  document.getElementById("info-title").textContent = scene.title;
  document.getElementById("info-description").textContent = scene.description;
  document.getElementById("info-designated").textContent = scene.designated;
  document.getElementById("info-category").textContent = scene.category;
  document.getElementById("info-area").textContent = scene.area;

  // Remove active class from all buttons, then add it to the clicked one
  document.querySelectorAll('.controls button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}