class inputMirror {
  constructor() {
    this.inputGroups = {};

    // Find all data-mirror elements
    const elements = Array.from(document.querySelectorAll("[data-mirror]"));

    // Group elements by their data-mirror attribute
    elements.forEach((element) => {
      const groupName = element.getAttribute("data-mirror");

      if (!(groupName in this.inputGroups)) {
        this.inputGroups[groupName] = [];
      }

      this.inputGroups[groupName].push(element);
    });

    // Register the events
    this.registerEvents();
  }

  // Register events
  registerEvents() {
    Object.values(this.inputGroups).forEach((group) => {
      group.forEach((element) => {
        element.addEventListener("input", (e) => {
          group.forEach((el) => {
            if (el !== e.target) {
              el.value = e.target.value;
            }
          });
        });
      });
    });
  }
}

// Create an instance of the class
export const inputsMirror = new inputMirror();
