const randomID = (): string => {
  console.log('Random ID function called');
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export default randomID;