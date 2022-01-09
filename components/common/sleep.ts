function Sleep(delay: number): void {
  const start = new Date().getTime()
  // eslint-disable-next-line no-empty
  while (new Date().getTime() < start + delay) {}
}

export default Sleep
