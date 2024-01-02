export default function countUp(targetElement, start, end, duration) {
    let current = start;
    const increment = Math.ceil((end - start) / duration);
    const element = document.getElementById(targetElement);
  
    const timer = setInterval(function() {
      current += increment;
      element.textContent = current.toLocaleString(); // Format number with commas
  
      if (current >= end) {
        clearInterval(timer);
        element.textContent = end.toLocaleString(); // Ensure final number is accurate
      }
    }, 100); // Interval in milliseconds (adjust for desired speed)
}
