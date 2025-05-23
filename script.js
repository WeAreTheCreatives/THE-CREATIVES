// Just a simple script to greet users in the console
console.log("Welcome to my portfolio site! Feel free to explore.");


// Attach click events to all gallery images
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
  
    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "block";
      });
    });
  });
  
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  