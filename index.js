const accentMap = {
  "Full palette": "unset", // undefined css var name
  "Light Cyan": "var(--tn-rosewater)",
  "Purple": "var(--tn-flamingo)",
  "Pink": "var(--tn-pink)",
  "Violet": "var(--tn-mauve)",
  "Red": "var(--tn-red)",
  "Dark Red": "var(--tn-maroon)",
  "Orange": "var(--tn-peach)",
  "Yellow": "var(--tn-yellow)",
  "Green": "var(--tn-green)",
  "Teal": "var(--tn-teal)",
  "Sky": "var(--tn-sky)",
  "Cyan": "var(--tn-sapphire)",
  "Blue": "var(--tn-blue)",
  "Light Blue": "var(--tn-lavender)",
};

const accentNames = Object.keys(accentMap);

const settings = [
  {
    key: "TNAccent",
    title: "Select accent color",
    description: "Note: Logseq's accent color should be disabled under Settings > General",
    type: "enum",
    enumPicker: "select",
    enumChoices: accentNames,
    default: "Full palette",
  },
  {
    key: "TNWhiteboard",
    title: "Override Whiteboard theme to light theme?",
    description: "Override whiteboard theme to use the Tokyo Night Day flavor",
    type: "boolean",
    default: false,
  },
];

function setWhiteboardOverride(bool) {
  const rootContainer = parent.document.querySelector(`html`);
  if (bool) {
    rootContainer.classList.add("whiteboard-day");
  } else {
    rootContainer.classList.remove("whiteboard-day");
  }
}

function setAccent(accentName) {
  logseq.provideStyle({
    key: "tn-accent",
    style: `
      :root:not([data-color]), :root[data-color='none'], :root[data-color='logseq'] {
        --tn-accent: ${accentMap[accentName]};
      }
      html.whiteboard-day div.whiteboard-page {
        --tn-accent: ${accentMap[accentName]};
      }
      html.whiteboard-day div.dashboard-card {
        --tn-accent: ${accentMap[accentName]};
      }
      html.whiteboard-day div.tl-tooltip-content {
        --tn-accent: ${accentMap[accentName]};
      }
      html.whiteboard-day div.tl-select-input-content {
        --tn-accent: ${accentMap[accentName]};
      }
    `,
  });
}

async function main() {
  logseq.useSettingsSchema(settings);
  logseq.onSettingsChanged((updatedSettings) => {
    if (setAccent(updatedSettings.TNAccent)) {
      console.log(`Applied ${updatedSettings.TNAccent} accent✨`);
    }
    if (setWhiteboardOverride(updatedSettings.TNWhiteboard)) {
      console.log(
        `${updatedSettings.TNWhiteboard ? "Applied" : "Removed"} Day whiteboard flavor✨`
      );
    }
  });
}

// bootstrap
logseq.ready(main).catch(console.error);
