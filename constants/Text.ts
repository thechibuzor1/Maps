
export interface DemoText {
    text: String;
    user: boolean;
  }
  
export const demoTexts: DemoText[] = [
    {
      text: "Hello!",
      user: true,
    },
    {
      text: "Hello! How may I assist you today?",
      user: false,
    },
    {
      text: "I'm having problems with the app.",
      user: true,
    },
    {
      text: "I am sorry to hear that. What exactly is the issue so i can provide assistance?",
      user: false,
    },
    {
      text: "I can't log in.",
      user: true,
    },
    {
      text: "And i can't create a new account.",
      user: true,
    },
    {
      text: "I'm so sorry to hear that.",
      user: false,
    },
    {
      text: "You may need to reset your account's password and try again",
      user: false,
    },
    {
      text: "okay",
      user: true,
    },
    {
      text: "Please let us know if the issue persists.",
      user: false,
    },
    {
      text: "okay. doing that now.",
      user: true,
    },
    {
      text: "I am on standby if you need further assistance.",
    user: false,
    },
  ];