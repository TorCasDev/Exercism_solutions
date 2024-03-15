export const frontDoorResponse = (line) => line[0]

export const frontDoorPassword = (word) => word[0].toUpperCase() + word.substring(1).toLowerCase()

export const backDoorResponse = (line) => line.trim().at(-1)

export const backDoorPassword = (word) => `${frontDoorPassword(word)}, please`