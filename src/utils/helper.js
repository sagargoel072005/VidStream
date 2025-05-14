var nameList = [
  'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan',
  'Krishna', 'Ishaan', 'Shaurya', 'Atharv', 'Kartik', 'Dhruv', 'Rudra',
  'Aryan', 'Ansh', 'Kabir', 'Om', 'Yuvraj', 'Rohan', 'Tanish', 'Laksh',
  'Nikhil', 'Manav', 'Harsh', 'Dev', 'Raj', 'Aniket', 'Siddharth', 'Kunal',
  'Samar', 'Abhay', 'Uday', 'Raghav', 'Tarun', 'Virat', 'Ajay', 'Karan',
  'Neeraj', 'Parth', 'Suresh', 'Ramesh', 'Arvind', 'Amit', 'Sanjay', 'Deepak',
  'Mehul', 'Yash', 'Naveen', 'Prem','Liam', 'Noah', 'Oliver', 'Elijah', 'James', 'William', 'Benjamin',
  'Lucas', 'Henry', 'Alexander', 'Mason', 'Michael', 'Ethan', 'Daniel',
  'Jacob', 'Logan', 'Jackson', 'Levi', 'Sebastian', 'Mateo', 'Jack',
  'Owen', 'Theodore', 'Aiden', 'Samuel', 'Joseph', 'John', 'David',
  'Wyatt', 'Matthew', 'Luke', 'Asher', 'Carter', 'Julian', 'Grayson',
  'Leo', 'Jayden', 'Gabriel', 'Isaac', 'Lincoln', 'Anthony', 'Hudson',
  'Dylan', 'Ezra', 'Thomas', 'Charles', 'Christopher', 'Jaxon', 'Maverick',
  'Josiah', 'Isaiah', 'Andrew', 'Elias', 'Joshua', 'Nathan', 'Caleb',
  'Ryan', 'Adrian', 'Miles', 'Eli', 'Nolan', 'Christian', 'Aaron', 'Cameron',
  'Ezekiel', 'Colton', 'Luca', 'Landon', 'Hunter', 'Jonathan', 'Santiago',
  'Axel', 'Easton', 'Cooper', 'Jeremiah', 'Angel', 'Roman', 'Connor',
  'Aanya', 'Ananya', 'Aarohi', 'Ira', 'Diya', 'Saanvi', 'Anika', 'Ishita',
  'Myra', 'Meera', 'Aadhya', 'Navya', 'Kritika', 'Riya', 'Tara', 'Trisha',
  'Shruti', 'Nandini', 'Sneha', 'Radhika', 'Pooja', 'Simran', 'Isha', 'Divya',
  'Neha', 'Priya', 'Kavya', 'Jhanvi', 'Nikita', 'Tanvi', 'Aishwarya', 'Lakshmi',
  'Radha', 'Bhavana', 'Vaishnavi', 'Swati', 'Anushka', 'Mira', 'Payal', 'Rekha',
  'Kalpana', 'Chitra', 'Smita', 'Geeta', 'Kiran', 'Sarita', 'Usha', 'Leela', 'Madhu'
];

export function generateRandomNames() {
  return nameList[Math.floor(Math.random() * nameList.length)];

}


const chatMessages = [
  "Lol 😂",
  "❤️from India!",
  "Just wow 🔥",
  "BRUH 😭😭😭",
  "Underrated AF🔥",
  "VIBES. ONLY. 🎧",
  "THE GOAT 🐐",
  "Lol 😂",
  "Wow 🔥",
  "Love ❤️",
  "Banger 🔥",
  "Legendary 💯",
  "Chill ❄️",
  "Smooth 👀",
  "Goat 🐐",
  "Vibes 🎧",
  "Masterpiece 🎥",
  "Heat 🔥",
  "Gold 💛",
  "Respect 🙌",
  "Goals 🏆",
  "Hype 🚀",
  "Fire 🔥",
  "Real 😮",
  "Fired 🔥",
  "Epic 🎉",
  "Insane 💥",
  "Wow 😲",
  "Mood 🎶",
  "Vibe ✌️",
  "Smooth 🤌",
  "Stunning 😍",
  "Legends 💯",
  "Respect 🙏",
  "Hilarious 😂",
  "Incredible 💥",
  "Obsessed 😩",
  "Unreal 😱",
  "Cinematic 🎬",
  "Replay 🔁",
  "Shook 😳",
  "Chillax 😎",
  "Dope 🤙",
  "Unbelievable 😨",
  "Sick 🤕",
  "Genius 🧠",
  "Pumped 💪",
  "Fresh 👌",
  "Wild 🔥",
  "Mastermind 🧠",
  "Legendary 🏆",
  "Jamming 🎵",
  "Epicness 🌟",
  "Wavy 🌊",
  "Slick 😎",
  "Banger 🔥",
  "Rewind ⏪"
];


export function generateRandomChatMessage() {

  return chatMessages[Math.floor(Math.random() * chatMessages.length)];
 
}